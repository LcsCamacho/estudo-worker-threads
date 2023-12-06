import request from "supertest";
import { jwtMock } from "./read.spec";

describe("testando remover", () => {
  it("should return a message unauthorized", async () => {
    const response = await request("http://localhost:3777", {})
      .delete("/home/1")
      .send();
    expect(response.status).toBe(401);
    expect(response.body).toEqual({
      message: "Unauthorized",
    });
  });

  it("should return a message success", async () => {
    const response = await request("http://localhost:3777", {})
      .delete("/home/1")
      .set("authorization", `Bearer ${jwtMock}`)
      .send();
    expect(response.status).toBe(200);
  });

  it("should return a message error", async () => {
    const response = await request("http://localhost:3777", {})
      .delete("/home/2")
      .set("authorization", `Bearer ${jwtMock}`)
      .send();
    expect(response.status).toBe(404);
  });
});
