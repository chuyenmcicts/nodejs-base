import express from "express";
import HomeController from "../controllers/HomeController";

const router = express.Router();

const initWebRouter = (app) => {
  router.get("/", HomeController.getHomePage);

  return app.use("/", router);
};

module.exports = initWebRouter;
