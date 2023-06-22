import {describe, expect, test} from '@jest/globals';
import {RecentCounter} from './p933_number_of_recent_calls';

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

describe('p933_number_of_recent_calls', () => {

  test('t1', () => {
    let obj = new RecentCounter()
    let calls = [[], [1], [100], [3001], [3002]]
    let ret: number = 0
    for (let v of calls) {
      if (v[0]) {
        ret = obj.ping(v[0])
      }
    }
    expect(ret).toBe(3);
  });

});
