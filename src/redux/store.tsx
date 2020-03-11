import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

// // import { systemReducer } from "./system/reducers";
import { chatReducer } from "./chat/reducers";

const rootReducer = combineReducers({
//   system: systemReducer,
  chat: chatReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
const Store = createStore(rootReducer, composeWithDevTools())
export {Store}
