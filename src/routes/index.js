const UserRouter = require("../routes/UserRouter");
const ProductRouter = require("../routes/ProductRouter");
const routes = (app) => {
  app.use("/api/users", UserRouter);
  app.use("/api/products", ProductRouter);
};

module.exports = routes;
