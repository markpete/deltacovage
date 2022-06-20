let spy: jest.SpyInstance;

beforeAll(() => {
  spy = jest.spyOn(global.console, "log").mockImplementation();
});

afterAll(() => {
  spy.mockRestore();
});

it("does not call actual console.log", () => {
  console.log("inner");
});
