import stringToNumber from "../script";

describe("Приводим строку к числу", () => {
  it("пустая строка должна стать числом 0", () => {
    expect(stringToNumber("")).toBe(0);
  });
  it("строка '42' должна стать числом 42", () => {
    expect(stringToNumber("42")).toBe(42);
  });
  it("строка 'NaN' должна стать числом NaN", () => {
    expect(stringToNumber("NaN")).toBe(NaN);
  });
  it("строка '42px' должна стать числом 42", () => {
    expect(stringToNumber("42px")).toBe(42);
  });
});