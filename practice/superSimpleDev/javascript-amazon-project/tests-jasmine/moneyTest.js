import formatCurrency from "../scripts/utils/money.js";
// descibe is a suite
describe("test suite: formatCurrency", () => {
  // it is a test
  it("Converts cents into dollars", () => {
    expect(formatCurrency(2095)).toEqual("20.95");
  });
  it("checks if function works with 0", () => {
    expect(formatCurrency(0)).toEqual("0.00");
  });
  it("checks if rounds up correctly", () => {
    expect(formatCurrency(2000.5)).toEqual("20.01");
  });
});
