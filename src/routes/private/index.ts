import {
  create,
  update,
  remove,
  read,
  readById,
} from "../../controller/example";
import { Router } from "express";
import { auth } from "../../middleware/auth";

export const routerPrivate = Router();

routerPrivate.get("/home", auth, read);
routerPrivate.get("/home/:id", auth, readById);
routerPrivate.post("/home", auth, create);
routerPrivate.put("/home/:id", auth, update);
routerPrivate.delete("/home/:id", auth, remove);
