import createSagaMiddleware from "redux-saga";
import { legacy_createStore, applyMiddleware } from "redux";
import { userReducer } from "./Reducers/UserReducer";
import { rootSaga } from "./Saga/UserSaga";
import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware();
export const store = legacy_createStore(
  userReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);
