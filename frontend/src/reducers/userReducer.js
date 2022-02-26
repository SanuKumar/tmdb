import { userList } from "../constants/userConstant";

export const userListReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case userList.USER_LIST_REQUEST:
      return { loading: true };
    case userList.USER_LIST_SUCCESS:
      return { loading: false, users: action.payload };
    case userList.USER_LIST_FAIL:
      return { loading: false, error: action.payload };
    case userList.USER_LIST_RESET:
      return { users: [] };
    default:
      return state;
  }
};
