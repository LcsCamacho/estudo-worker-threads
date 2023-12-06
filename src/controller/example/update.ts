import { Request, Response } from "express";

export const update = async (req: Request, res: Response) => {
  console.log(req.params.id);
  if (!req.params.id)
    return res.status(400).send("Id is required");
  if (req.params.id === "2")
    return res.status(404).send("Não encontrado");

  try {
    res.status(200).send();
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
