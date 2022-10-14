import express from "express";
import HomeController from "../controllers/HomeController";

const router = express.Router();

const initWebRouter = (app) => {
  router.get("/", HomeController.getUser);

  return app.use("/", router);
};

module.exports = initWebRouter;
