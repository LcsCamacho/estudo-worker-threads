import { Request, Response } from "express";

export const read = async (req: Request, res: Response) => {
  try {
    res.status(200).send([
      {
        id: 1,
        name: "example",
        email: "lucas.camachofilho@gmail.com",
        gender: "MASCULINO",
        age: 25,
      },
    ]);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};

export const readById = async (req: Request, res: Response) => {
  if (!req.params.id)
    return res.status(400).send("id is required");
  if (req.params.id === "2")
    return res.status(404).send("Não encontrado");

  try {
    res.status(200).send({
      id: req.params.id,
      name: "example",
      email: "lucas.camachofilho@gmail.com",
      gender: "MASCULINO",
      age: 25,
    });
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
