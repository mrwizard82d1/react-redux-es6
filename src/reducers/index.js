/**
 * Created by larryjones on 4/23/17.
 */

import {combineReducers} from "redux";
// I choose to name the export `courses` even though the original function was named `courseReducer`. By naming the
// export `courses` and then using that name in `combineReducers`, we will use the name `courses` when we reference
// the courses part of the state. I made a similar choice about `authors`.
import courses from "./courseReducer";
import authors from "./authorReducer";

const rootReducer = combineReducers({
  // Again, we use the ES6 "shorthand property name" that "automagically" names a property after the name of the
  // value used to create the property.
  authors,
  courses
});

export default rootReducer;
