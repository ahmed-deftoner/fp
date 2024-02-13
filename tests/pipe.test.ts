import { pipe } from "@carbonteq/fp/pipe";


// Example usage:
function addTwo(x: number): number {
  return x + 2;
}

function multiplyByThree(x: number): number {
  return x * 3;
}

function subtractTen(x: number): number {
  return x - 10;
}
  

describe('pipe', () => {
  it('should construct pipe', () => {

    const res = pipe(
      23,
      addTwo,
      multiplyByThree,
      subtractTen     
    )
    console.log(res); // Output: ((5 + 2) * 3) - 10 = 11

    expect(res).toBe(65);
  });

});
