import axios from "axios";

import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  fetchUsersError,
  fetchUsersReq,
  fetchUsersSuccess,
} from "../ActionTypes/UserActionTypes";

function* fetchUsersData() {
  try {
    const response = yield call(
      axios.get,
      "https://jsonplaceholder.typicode.com/users"
    );
    yield put(fetchUsersSuccess(response.data));
  } catch (error) {
    yield put(fetchUsersError(error));
  }
}

export function* rootSaga() {
  yield takeLatest(fetchUsersReq().type, fetchUsersData);
}
