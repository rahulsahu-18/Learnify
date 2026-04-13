import jwt from "jsonwebtoken";

 const isAuth = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({
        message: "User not authenticated",
        success: false,
      });
    }
    const response = await jwt.verify(token, process.env.SECREAT_KEY);
    if (!response) {
      return res.status(401).json({
        message: "Invalid token",
        success: false,
      });
    }
    req.id = response.userId;
    next();
  } catch (error) {
    console.log(error);
  }
};

export default isAuth;