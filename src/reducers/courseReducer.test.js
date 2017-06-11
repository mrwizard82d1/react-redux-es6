/**
 * Created by larryjones on 6/11/17.
 */

import expect from 'expect';
import courseReducer from './courseReducer';
import { createCourseSuccess, updateCourseSuccess } from '../actions/courseActions';

describe('courseReducer', () => {
  it('should add the course on CREATE_COURSE_SUCCESS', () => {
    const beforeState = [
      {title: 'Anti-Patterns'}
    ];
    const courseToAdd = {
      title: 'Clean Code'
    };
    
    const createCourseAction = createCourseSuccess(courseToAdd);
    
    const actualAfterState = courseReducer(beforeState, createCourseAction);
    
    expect(actualAfterState.length).toBe(2);
    expect(actualAfterState[0].title).toBe('Anti-Patterns');
    expect(actualAfterState[1].title).toBe('Clean Code');
  });
  
  it('should update the course on UPDATE_COURSE_SUCCESS', () => {
    const beforeState = [
      {
        id: 'anti-patterns',
        title: 'Anti-Patterns'
      },
      {
        id: 'clean-code',
        title: 'Clean Coders'
      }
    ];
    const courseToUpdate = {
      id: 'clean-code',
      title: 'Clean Code'
    };
    
    const createCourseAction = updateCourseSuccess(courseToUpdate);
    
    const actualAfterState = courseReducer(beforeState, createCourseAction);
    
    expect(actualAfterState.length).toBe(2);
    expect(actualAfterState[0].title).toBe('Anti-Patterns');
    expect(actualAfterState[1].title).toBe('Clean Code');
  });
});
