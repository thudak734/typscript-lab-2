import { HtmlGreeter } from "../src/HtmlGreeter";

describe("return freeting inside tag brackets", () => {
  test("test tag with no tagline", () => {
    const greets: HtmlGreeter = new HtmlGreeter("asf");
    expect(greets.greet("Tom")).toBe("<h1>asf, Tom!<h1>");
  });
});
