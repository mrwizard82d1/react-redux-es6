/**
 * Created by larryjones on 6/11/17.
 */

import expect from 'expect';
import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import * as types from './actionTypes';
import { createCourseSuccess, loadCourses } from './courseActions';

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

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async actions', () => {
  afterEach(() => {
    // After each test, I clean all calls to `nock` to prepare for the next test.
    nock.cleanAll();
  });
  
  describe('`loadCourse`', () => {
    it('should create `BEGIN_AJAX_CALL` and `LOAD_COURSES_SUCCESS` in `loadCourse`', (done) => {
      // Here's an example call to `nock`
      // nock('http://example.com/')
      //   .get('/courses')
      //   .reply(200, {body: {course: [{id: 1, firstName: 'Cory', lastName: 'House'}]}});
      
      // Define the actions that we expect to fire.
      const expectedActions = [
        {type: types.BEGIN_AJAX_CALL},
        {
          type: types.LOAD_COURSES_SUCCESS,
          body: { courses: [ { id: 'clean-code', title: 'Clean Code' } ] }
        }
      ];
      
      // Create the mock store to query with an empty list of courses beforehand.
      // Tell the mock store what actions to expect.
      const store = mockStore({courses: []}, expectedActions);
      
      // We now dispatch our actions...
      store.dispatch(loadCourses()).then(() => {
        // ... then verify the actions fired.
        const actualActions = store.getActions();
        expect(actualActions[0].type).toBe(types.BEGIN_AJAX_CALL);
        expect(actualActions[1].type).toBe(types.LOAD_COURSES_SUCCESS);
        done();
      });
    });
  });
});
