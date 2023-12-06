import { createWorker } from "./create-worker";

export const createPoolWorkers = (size: number) => {
  const workerPool = [];
  for (let i = 0; i < size; i++) {
    const worker = createWorker();
    workerPool.push(worker);
  }
  return workerPool;
};
