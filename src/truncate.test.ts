import { describe, expect, test } from "vitest";
import { truncate } from "./truncate";

describe("truncate", () => {
  test("returns short texts unchanged", () => {
    expect(truncate("Hello", 10)).toBe("Hello");
  });

  test("shortens long texts and adds an ellipsis", () => {
    expect(truncate("Hello World", 8)).toBe("Hello Wo…");
  });

  test("never returns more characters than maxLength", () => {
    expect(truncate("Hello World", 5)).toBe("Hello…");
  });
});

// Test 2 Hello Wo the o was missing
// Test 3 changed .tobe("Hello…") is expecitn 5 letters
