import { pipe } from "@carbonteq/fp/pipe"; 

describe('pipe', () => {
  it('should construct pipe', () => {
    const len = (s: string): number => s.length;
    const double = (n: number): number => n * 2;
    const square = (n: number): number => n ** 2;
    
    const res = pipe("hi", double, len, square);

    expect(res).toBe(16);
  });

});
