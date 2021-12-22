import UserService from '../services/user-service';
import OrderService from '../services/order-service';

class CartController {
  async createOrder(req, res) {
    try {
      const { products } = req.body;
      const { totalPrice } = req.body;

      const token = req.headers.authorization?.split(' ')[1];
      if (!token) {
        return res
          .status(403)
          .json({ message: 'Authentication Error, user not authorized' });
      }
      //@ts-ignore
      const { id } = await UserService.getUserId(token);
      await OrderService.setUserInfo(req.body.user, id);

      const addressIdUser = await OrderService.getIdAddressUser(id);

      for (const product in products) {
        console.table({
          product:products[product].id,
          id:id,
          productQuantity:products[product].quantityCart,
          address:addressIdUser[0].id,
          price:totalPrice,
        });
        await OrderService.setOrder(
          products[product].id,
          id,
          products[product].quantityCart,
          addressIdUser[0].id,
          totalPrice,
        );
      }

      res.status(200).json({ message: 'The order has been sent' });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

export default new CartController();
