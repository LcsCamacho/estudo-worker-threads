import { Request, Response, NextFunction } from "express";

export const auth = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { authorization } = req.headers;
  if (!authorization)
    return res.status(401).json({ message: "Unauthorized" });

  next();
};
