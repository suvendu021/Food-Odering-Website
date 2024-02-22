import { sum } from "../sum";

test("sum function return sim of two nos", () => {
  const result = sum(4, 3);
  //Assertion
  expect(result).toBe(7);
});
