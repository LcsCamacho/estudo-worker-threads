import request from "supertest";
const jwtMock =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

describe("testando o create", () => {
  const bodyMock = {
    name: "Lucas Camacho",
    email: "lucas.camachofilho@gmail.com",
    gender: "MASCULINO",
    age: 18,
    password: "12345678",
  };

  it("should create and receive ID", async () => {
    const response = await request("http://localhost:3777", {})
      .post("/home")
      .set("authorization", `Bearer ${jwtMock}`)
      .send(bodyMock);
    expect(response.status).toBe(201);
    expect(response.body).toEqual({
      id: expect.any(String),
    });
  });
  it("should return a message unauthorized", async () => {
    const response = await request("http://localhost:3777", {})
      .post("/home")
      .send(bodyMock);
    expect(response.status).toBe(401);
    expect(response.body).toEqual({
      message: "Unauthorized",
    });
  });
  it("should return a message error", async () => {
    const response = await request("http://localhost:3777", {})
      .post("/home")
      .set("authorization", `Bearer ${jwtMock}`)
      .send({});
    expect(response.status).toBe(422);
  });
});
