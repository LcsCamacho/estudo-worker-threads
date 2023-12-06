import { Worker } from "node:worker_threads";
import { Response } from "express";
import path from "path";

export function createWorker() {
  const pathWorker = path.resolve(__dirname, "worker.ts");
  const worker = new Worker(pathWorker);

  // Manipula erros ocorridos no trabalhador
  worker.on("error", err => {
    console.error(`Erro no trabalhador: ${err.message}`);
  });

  console.log("Worker criado => ", worker.threadId);
  return worker;
}
