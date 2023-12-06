import { Request, Response } from "express";
import { User } from "@prisma/client";
import { usePoolWorkers } from "../../workers/pool-worker";

export const create = async (req: Request, res: Response) => {
  const worker = usePoolWorkers();
  const { name, email, password }: User = req.body;
  console.log(
    `Enviando tarefa para o worker ${worker.threadId}`,
  );
  worker.postMessage(
    JSON.stringify({
      name: "create",
      task: { name, email, password },
    }),
  );
  worker.once("message", (data: string) => {
    res.status(200).json({ message: data });
  });
};
