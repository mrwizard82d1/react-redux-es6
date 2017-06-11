/**
 * Created by larryjones on 6/11/17.
 */

import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers/index';
import { initialState } from '../reducers/initialState';
import * as courseActions from '../actions/courseActions';

describe('Store integration', () => {
  it('should create courses correctly', () => {
    // Remember that we need *not* supply middleware unless needed.
    const store = createStore(rootReducer, initialState);
    
    // Create a course to create (in the store).
    const courseToAdd = { title: 'Clean Code' };
    
    // Dispatch the action to create the course.
    const action = courseActions.createCourseSuccess(courseToAdd);
    store.dispatch(action);
    
    // Verify that we added `courseToAdd`.
    const afterState = store.getState();
    expect(afterState.courses.length).toBe(1);
    expect(afterState.courses[0].title).toBe('Clean Code');
  });
});
