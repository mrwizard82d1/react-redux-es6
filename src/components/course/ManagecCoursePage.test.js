/**
 * Created by larryjones on 6/10/17.
 */

import React from 'react';
import { expect } from 'expect';
import { mount } from 'enzyme';
import ManageCoursePage from './ManageCoursePage';

describe('ManageCoursePage', () => {
  it('sets an error when saving a course with no title', () => {
    const cut = mount(<ManageCoursePage authors="" course="" actions=""/>);

    expect(cut.find('CourseForm').length).toBe(1);
  })
});
