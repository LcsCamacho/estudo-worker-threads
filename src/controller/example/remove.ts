import { Request, Response } from "express";

export const remove = async (req: Request, res: Response) => {
  if (!req.params.id)
    return res.status(400).send("id is required");
  if (req.params.id === "2")
    return res.status(404).send("Não encontrado");

  try {
    res.status(200).send();
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
