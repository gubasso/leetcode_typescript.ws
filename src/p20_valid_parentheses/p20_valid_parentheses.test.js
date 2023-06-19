import {describe, expect, test} from '@jest/globals';
import {isValid} from './p20_valid_parentheses';

describe('p20_valid_parentheses', () => {

  test('t1', () => {
    const result = isValid("()")
    expect(result).toBe(true)
  });

  test('t2', () => {
    const result = isValid("({})")
    expect(result).toBe(true)
  });

  test('t3', () => {
    const result = isValid("(){}[]")
    expect(result).toBe(true)
  });

  test('t4', () => {
    const result = isValid("(]")
    expect(result).toBe(false)
  });

  test('t5', () => {
    const result = isValid("({)}")
    expect(result).toBe(false)
  });

  test('t6', () => {
    const result = isValid("]")
    expect(result).toBe(false)
  });

  test('t7', () => {
    const result = isValid("([}}])")
    expect(result).toBe(false)
  });

});
