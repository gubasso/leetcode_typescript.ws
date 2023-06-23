import {describe, expect, test} from '@jest/globals';
import { dailyTemperatures } from './p739_daily_temperatures';

describe('p739_daily_temperatures', () => {

  test('t1', () => {
    let result = dailyTemperatures([73,74,75,71,69,72,76,73])
    expect(result).toStrictEqual([1,1,4,2,1,1,0,0])
  });

  test('t2', () => {
    let result = dailyTemperatures([30,40,50,60])
    expect(result).toStrictEqual([1,1,1,0])
  });

  test('t3', () => {
    let result = dailyTemperatures([30,60,90])
    expect(result).toStrictEqual([1,1,0])
  });

});
