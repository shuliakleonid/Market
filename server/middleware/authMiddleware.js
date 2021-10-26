import AuthController from "../controllers/auth-controller.js";

const authMiddleware = async (req, res, next) => {
  if (req.method === "OPTIONS") {
    next();
  }
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res
          .status(403)
          .json({message: "Authentication Error, user not authorized"});
    }

    const userExpireToken = (err, data) => {
      if (err) {
        console.log("ERROR : ", err);
      } else {
        if(data){
          next();
        }else {
          return res
            .status(403)
            .json({ message: "Authentication Error, token is expired" });
        }
      }
    };
    await AuthController.getUser(token, userExpireToken);

  } catch (e) {
    console.log(e);
    return res
        .status(403)
        .json({message: "Authentication Error, user not authorized"});
  }
};

export default authMiddleware;
