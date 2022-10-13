import express from "express";

const router = express.Router();

const initWebRouter = (app) => {
  router.get("/", (rep, res) => {
    return res.send("Hello Chuyen");
  });

  return app.use("/", router);
};

module.exports = initWebRouter;
