import { sum } from "../Sum";

test("Sum func() ahould calculate sum of two no",()=>{

  const result = sum(2,3);

  expect(result).toBe(5);
})