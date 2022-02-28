import { LoudGreeter } from "../src/LoudGreeter";

describe("LoudGreeter Class", () => {
  test("inherits the greeting prop from parent", () => {
    const newLoudGreeter: LoudGreeter = new LoudGreeter("Howdy");
    expect(newLoudGreeter.greeting).toBe("Howdy");
  });
  test(""),
    () => {
      const newLoudGreeter: LoudGreeter = new LoudGreeter("Howdy");
      expect(newLoudGreeter.greet("Mitch")).toBe("Howdy, Mitch!!");
    };
});
