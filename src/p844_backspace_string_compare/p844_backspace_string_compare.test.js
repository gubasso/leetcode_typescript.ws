import {describe, expect, test} from '@jest/globals';
import {backspaceCompare} from './p844_backspace_string_compare';

describe('p844_backspace_string_compare', () => {

  test('t1', () => {
    const result = backspaceCompare("ab#c", "ad#c")
    expect(result).toBe(true)
  });

  test('t2', () => {
    const result = backspaceCompare("ab##", "c#d#")
    expect(result).toBe(true)
  });

  test('t3', () => {
    const result = backspaceCompare("a#c", "b")
    expect(result).toBe(false)
  });

});
