require("dotenv").config();
import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import connect from "./config/connectDB";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app);

connect();

const port = process.env.PORT || 6969;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
