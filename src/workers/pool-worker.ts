import { createPoolWorkers } from "./create-pool-workers";
let workerPool = createPoolWorkers(4);
let workerIndex = 0;

export const usePoolWorkers = () => {
  const worker = workerPool[workerIndex];
  workerIndex++;
  if (workerIndex === 4) {
    workerIndex = 0;
    workerPool = createPoolWorkers(4);
    console.log("resetou");
  }
  return worker;
};
