/**
 * Created by larryjones on 6/10/17.
 */

import React from 'react';
import { Provider } from 'react-redux';
import { expect } from 'expect';
import { mount } from 'enzyme';
import ManageCoursePage from './ManageCoursePage';

describe('ManageCoursePage', () => {
  it('sets an error when saving a course with no title', () => {
    /**
     * The following code tests `ManagedCoursePage` as a connected component.
     *
     * This approach is most useful if you want to test connect-related code
     * like `mapStateTopProps`.
     */
    const cut = mount(
      <Provider store={store}>
        <ManageCoursePage authors="" course="" actions=""/>
      </Provider>);
  })
});
