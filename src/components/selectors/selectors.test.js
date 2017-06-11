/**
 * Created by larryjones on 6/11/17.
 */

import expect from 'expect';
import { authorsFormattedForSelection } from './selectors';

describe('authorsFormattedForSelection', () => {
  it('should correctly format the author\'s name', () => {
    const toFormat = [
      {value: null, firstName: 'William', lastName: 'Shakespeare'}
    ];
    
    const actualResult = authorsFormattedForSelection(toFormat);
    
    expect(actualResult[0].text).toEqual('William Shakespeare');
  });
});
