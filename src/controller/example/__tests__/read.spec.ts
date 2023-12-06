import request from "supertest";
export const jwtMock =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

describe("testando o read", () => {
  it("should return a message unauthorized", async () => {
    const response = await request("http://localhost:3777", {})
      .get("/home")
      .send();
    expect(response.status).toBe(401);
    expect(response.body).toEqual({
      message: "Unauthorized",
    });
  });

  it("should return a array with items", async () => {
    const response = await request("http://localhost:3777", {})
      .get("/home")
      .set("authorization", `Bearer ${jwtMock}`)
      .send();
    expect(response.status).toBe(200);
    expect(response.body).toEqual(
      expect.arrayContaining([
        {
          id: 1,
          name: "example",
          email: "lucas.camachofilho@gmail.com",
          gender: "MASCULINO",
          age: 25,
        },
      ]),
    );
  });
  it("should return a item by id", async () => {
    const response = await request("http://localhost:3777", {})
      .get("/home/1")
      .set("authorization", `Bearer ${jwtMock}`)
      .send();
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      id: "1",
      name: "example",
      email: "lucas.camachofilho@gmail.com",
      gender: "MASCULINO",
      age: 25,
    });
  });
  it("should return a erro not found", async () => {
    const response = await request("http://localhost:3777", {})
      .get("/home/2")
      .set("authorization", `Bearer ${jwtMock}`)
      .send();
    expect(response.status).toBe(404);
  });
});
