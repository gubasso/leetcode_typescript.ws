import {describe, expect, test} from '@jest/globals';
import {simplifyPath} from './p71_simplify_path';

describe('p71_simplify_path', () => {

  test('t1', () => {
    const result = simplifyPath("/home/")
    expect(result).toBe("/home");
  });

  test('t2', () => {
    const result = simplifyPath("/../")
    expect(result).toBe("/");
  });

  test('t3', () => {
    const result = simplifyPath("/home//foo/")
    expect(result).toBe("/home/foo");
  });

});
