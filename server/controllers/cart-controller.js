import UserService from "../services/user-service.js";
import OrderService from "../services/order-service.js";

class CartController {
  async createOrder(req, res) {
    try {
      const { products } = req.body;
      const { totalPrice } = req.body;

      const token = req.headers.authorization?.split(" ")[1];
      if (!token) {
        return res
          .status(403)
          .json({ message: "Authentication Error, user not authorized" });
      }

      const { id } = await UserService.getUserId(token);
      await OrderService.setUserInfo(req.body.user, id);

      const addressIdUser = OrderService.getIdAddressUser(id);

      for (const product in products) {
        await OrderService.setOrder(
          products[product].id,
          id,
          products[product].quantityCart,
          addressIdUser[0],
          totalPrice
        );
      }

      res.status(200).json({ message: "The order has been sent" });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

export default new CartController();
