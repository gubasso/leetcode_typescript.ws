import {describe, expect, test} from '@jest/globals';
import {makeGood} from './p1544_make_the_string_great';

describe('p1544_make_the_string_great', () => {

  test('t1', () => {
    const result = makeGood("leEeetcode")
    expect(result).toBe("leetcode");
  });

  test('t2', () => {
    const result = makeGood("abBAcC")
    expect(result).toBe("");
  });

  test('t3', () => {
    const result = makeGood("s")
    expect(result).toBe("s");
  });

  test('t4', () => {
    const result = makeGood("kkdsFuqUfSDKK")
    expect(result).toBe("kkdsFuqUfSDKK");
  });

});
