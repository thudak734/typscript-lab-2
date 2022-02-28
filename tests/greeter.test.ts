import { Greeter } from "../src/Greeter";

describe("greeter class", () => {
  test("the greeting property is properly set by the constructor", () => {
    const myGreeting: Greeter = new Greeter("Hey!");
    expect(myGreeting.greeting).toBe("Hey!");
  });
});
