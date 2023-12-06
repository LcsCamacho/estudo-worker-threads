import { User } from "@prisma/client";
import { threadId, parentPort } from "node:worker_threads";
import { prisma } from "../dao/prisma";

parentPort?.once("message", async data => {
  const { name, task: taskData } = JSON.parse(data);
  console.log(`I'm ${threadId}! with ${name} task`);
  let user: User | undefined = undefined;
  try {
    user = await prisma.user.create({
      data: {
        name: taskData.name,
        email: taskData.email,
        password: taskData.password,
      },
    });
  } catch (error) {
    console.log(error);
    parentPort?.postMessage(
      `I'm ${threadId} done task ${name} with error ${error}`,
    );
  }
  parentPort?.postMessage(
    `I'm ${threadId} done task ${name} with data ${JSON.stringify(
      user,
    )}`,
  );
});
