import {describe, expect, test} from '@jest/globals';
import {removeDuplicates} from './p1047_remove_all_adjacent_duplicates_in_string';

describe('p1047_remove_all_adjacent_duplicates_in_string', () => {

  test('t1', () => {
    const result = removeDuplicates("abbaca")
    expect(result).toBe("ca")
  });

  test('t2', () => {
    const result = removeDuplicates("azxxzy")
    expect(result).toBe("ay")
  });

});
