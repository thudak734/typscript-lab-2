import { Greeter } from "./Greeter";

export class HtmlGreeter extends Greeter {
  tagName: string;
  constructor(newGreeting: string, tagName: string = "h1") {
    super(newGreeting);
    this.tagName = tagName;
  }
  greet(name: string): string {
    return `<${this.tagName}>` + super.greet(name) + `</${this.tagName}>`;
  }
}

const greets: HtmlGreeter = new HtmlGreeter("heya");
console.log(greets.greet("asf"));
