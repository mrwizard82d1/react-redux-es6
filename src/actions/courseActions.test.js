/**
 * Created by larryjones on 6/11/17.
 */

import expect from 'expect';
import * as types from './actionTypes';
import { createCourseSuccess } from './courseActions';

describe('courseActions', () => {
  describe('createCourseSuccess', () => {
    it('should create a CREATE_COURSE_SUCCESS action', () => {
      const forCourse = {id: 'clean-code', title: 'Clean Code'};
      const expectedAction = {
        type: types.CREATE_COURSE_SUCCESS,
        course: forCourse
      };
      
      const actualAction = createCourseSuccess(forCourse);
      
      expect(actualAction).toEqual(expectedAction);
    });
  });
});
