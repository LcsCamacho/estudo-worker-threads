//imports
import express from "express";
import cors from "cors";
import { router } from "./routes/router";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json";

//app
const app = express();

//swagger
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument),
);
app.get("/swagger", (req, res) => {
  res.sendFile(process.cwd() + "/swagger.json");
});
app.get("/docs", (req, res) => {
  res.sendFile(process.cwd() + "/index.html");
});
app.use(cors());
app.use(express.json());
app.use(router);

//teste
app.listen(3777, () => {
  console.log("Server running on port 3777");
});
