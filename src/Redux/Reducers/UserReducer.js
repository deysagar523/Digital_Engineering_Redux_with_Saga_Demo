import {
  FETCH_USERS_ERROR,
  FETCH_USERS_REQ,
  FETCH_USERS_SUCCESS,
} from "../Actions/UserActions";

const initialUserState = {
  loading: false,
  users: [],
  error: "",
};

export const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQ:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case FETCH_USERS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
