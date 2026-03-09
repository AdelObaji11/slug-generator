import { slug } from "./index";
import { describe, it, expect } from "vitest";
describe("slug url", () => {
  it("replace to lowercase", () => {
    expect(slug("HelloWorlD")).toBe("helloworld");
  });
  it("remove special characters", () => {
    expect(slug("+Hello@World!")).toBe("helloworld");
    expect(slug("-Hello#World$")).toBe("helloworld");
    expect(slug("Hello%World^*")).toBe("helloworld");
  });
  it("remove leading/trailing hyphens", () => {
    expect(slug("-Hello-")).toBe("hello");
    expect(slug("---Hello---")).toBe("hello");
  });
  it("replace spaces and underscores with hyphens", () => {
    expect(slug("Hello_  _World")).toBe("hello-world");
    expect(slug("123_ 456")).toBe("123-456");
  });
  it("remove edge cases", () => {
    expect(slug("")).toBe("");
  });
  it("collapse repeated hyphens", () => {
    expect(slug("Hello---World")).toBe("hello-world");
    expect(slug("Hello- -World")).toBe("hello-world");
  });
});
