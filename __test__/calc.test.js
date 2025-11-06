import { calc } from '../src/calc.js';
describe('calc', () => {
    test('add/sub/mul work', () => {
         expect(calc.add(3, 3)).toBe(6);
        expect(calc.sub(9,3)).toBe(6);
        expect(calc.mul(6,2)).toBe(12);
 });
 test('div works', () => {
    expect(calc.div(6, 3)).toBe(2);
    expect(calc.div(-6, 2)).toBe(-3);
 });
 test('div by zero throws', () => {
 expect(() => calc.div(1, 0)).toThrow(RangeError);
 });
})