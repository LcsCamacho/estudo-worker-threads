import request from "supertest";
import { jwtMock } from "./read.spec";

describe("testando o update", () => {
  it("should return a message unauthorized", async () => {
    const response = await request("http://localhost:3777", {})
      .put("/home/1")
      .send();
    expect(response.status).toBe(401);
    expect(response.body).toEqual({
      message: "Unauthorized",
    });
  });

  it("should return a message success", async () => {
    const response = await request("http://localhost:3777", {})
      .put("/home/1")
      .set("authorization", `Bearer ${jwtMock}`)
      .send({
        id: 1,
        name: "example",
        email: "lucas.camachofilho@gmail.com",
        gender: "MASCULINO",
        age: 25,
      });
    expect(response.status).toBe(200);
  });

  it("should return a message error", async () => {
    const response = await request("http://localhost:3777", {})
      .put("/home/2")
      .set("authorization", `Bearer ${jwtMock}`)
      .send({
        id: 1,
        name: "example",
        email: "lucas.camachofilho@gmail.com",
        gender: "MASCULINO",
        age: 25,
      });
    expect(response.status).toBe(404);
  });
});
