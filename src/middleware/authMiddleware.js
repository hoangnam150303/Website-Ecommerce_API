const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const autMiddleware = (req, res, next) => {
  console.log("Checktoken:", req.headers.token);
  const token = req.headers.token.split(" ")[1];
  console.log("Token: ", token);
  if (!token) {
    return res.status(401).json({
      message: "Token not provided",
      status: "ERROR",
    });
  }

  jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
    if (err) {
      return res.status(404).json({
        message: "The authentication",
        status: "ERROR",
      });
    }
    console.log("user:", user);
    const { payload } = user;
    if (payload?.isAdmin) {
      next();
    } else {
      return res.status(404).json({
        message: "U are not admin",
        status: "ERROR",
      });
    }
  });
};

const autUserMiddleware = (req, res, next) => {
  console.log("Checktoken:", req.headers.token);
  const token = req.headers.token.split(" ")[1];
  console.log("Token: ", token);
  if (!token) {
    return res.status(401).json({
      message: "Token not provided",
      status: "ERROR",
    });
  }

  jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
    if (err) {
      return res.status(404).json({
        message: "The authentication",
        status: "ERROR",
      });
    }
    console.log("user:", user);
    const { payload } = user;
    if (payload?.isAdmin) {
      next();
    } else {
      return res.status(404).json({
        message: "U are not admin",
        status: "ERROR",
      });
    }
  });
};


module.exports = {
  autMiddleware,
};
