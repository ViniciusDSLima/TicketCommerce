import {Router} from "express";
import {ResourceNotFoundError} from "../../../lib/implementations/ResourceNotFoundError";

export const appRoutes = Router();

appRoutes.get("*/*", (req, res) => {
  throw new ResourceNotFoundError(`Cannot found resource ${req.method} ${req.path}`);
});


