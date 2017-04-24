/**
 * Created by larryjones on 4/23/17.
 */

// The (Redux) actions related to courses.
//
// Because we typically have *many* actions, we will export all functions (and will provide *no* default).

export function createCourse(course) {
  // The returned object takes advantage of an ES6 feature: if the initial value of an object comes from a variable
  // whose name is the same as the property which it initializes, one can leave it out. (Think the opposite of
  // Clojure / ClojureScript map destructuring in a `let`.)
  //
  // Concretely, I want my action to have two properties: `type` (required for a Redux action creator) and `course`
  // containing the course to be created. Because the variable, `course`, has the same name as the property, I simply
  // include the variable in the object literal and the engine takes care of the mapping.

  debugger;
  return {type: 'CREATE_COURSE', course};
}

