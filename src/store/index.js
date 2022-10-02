import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducers from "../reducers";
import { authenticate, isAuthenticated } from "./localStorage";
import logger from 'redux-logger';
import { ENV } from "../config";


let middleware = [thunk];

if (ENV === "development") {
  console.log("Development mode");
  middleware.push(logger);
}


// verification auth
const storageAuth = isAuthenticated();

const store = createStore(
  rootReducers,
  storageAuth,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  
);

store.subscribe(() => {
  authenticate({
    auth: store.getState().auth,
  });
});

export default store;