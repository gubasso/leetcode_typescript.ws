import {describe, expect, test} from '@jest/globals';
import { StockSpanner } from './p901_online_stock_span';

describe('p901_online_stock_span', () => {

  test('t1', () => {
    let input = [[100], [80], [60], [70], [60], [75], [85]]
    let output = [1, 1, 1, 2, 1, 4, 6]
    let obj = new StockSpanner()
    for (let i = 0; i < input.length; i++) {
      let result = obj.next(input[i][0])
      expect(result).toBe(output[i])
    }
  });

  test('t2', () => {
    let input = [[28],[14],[28],[35],[46],[53],[66],[80],[87],[88]]
    let output = [1,1,3,4,5,6,7,8,9,10]
    let obj = new StockSpanner()
    for (let i = 0; i < input.length; i++) {
      let result = obj.next(input[i][0])
      expect(result).toBe(output[i])
    }
  });

});
