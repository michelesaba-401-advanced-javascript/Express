"use strict";

const { server } = require("../server.js");
const supertest = require("supertest");
const mockRequest = supertest(server);
// const timeLogger = require("../lib/middleware/timeLogger.js");

describe("web server", () => {
  it("has a home page", () => {
    return mockRequest.get("/a").expect(200);
  });
  it("should return 404 if not found", () => {
    return mockRequest.get("/z").expect(404);
  });
  it("should respond with the date", () => {
    return mockRequest.get("/a").expect(200);
  });
});

