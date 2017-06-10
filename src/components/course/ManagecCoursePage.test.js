/**
 * Created by larryjones on 6/10/17.
 */

/**
 * Testing a connected component, like `ManagedCoursePage`, can utilize two approaches.
 * The first approach tests the actually connected component. It requires wrapping
 * the class under test in a `<Provider>` component and providing a (mock) store. In
 * many ways, this test is a kind of integration test since all these components must
 * be in place to test the class under test.
 *
 * The second approach, used by this test, unit tests the *unconnected* component.
 * This approach requires that the module defining the class under test to export
 * the unconnected component (by using both a named and default export).
 *
 * This class uses the second approach.
 */
import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import { ManageCoursePage } from './ManageCoursePage';

describe('ManageCoursePage', () => {
  it('sets an error when saving a course with no title', () => {
    const cut = mount(<ManageCoursePage authors={[]} course="" actions=""/>);

    /**
     * Find the actual save button in the DOM.
     *
     * Note: I first tried finding the text "Save". This failed, but it failed
     * "oddly." I created an expectation that the value returned by `find('Save')`
     * not be null. This expectation passed. I do not understand why.
     *
     * When I tried performing other operations on the found element, it failed,
     * cryptically reporting
     *
     *   Error: This method is only meant to be run on a single node. 0 found
     *   instead.
     *
     * My working hypothesis is that `enzyme` returns wrapper that corresponds
     * to no DOM node. Thus, it is not `null`, but it supports limited enzyme
     * methods.
     */
    const actualSaveButton = cut.find('input[value="Save"]').last();

    expect(actualSaveButton.prop('type')).toBe('submit');
  })
});
