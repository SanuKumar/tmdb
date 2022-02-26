import axios from "axios";
import { userList } from "../constants/userConstant";
import { userApi } from "../apiURL";

export const listUsers = () => async (dispatch, getstate) => {
  try {
    dispatch({
      type: userList.USER_LIST_REQUEST,
    });
    const { data } = await axios.get(`${userApi}`);
    dispatch({
      type: userList.USER_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: userList.USER_LIST_FAIL,
      payload:
        error.response && error.response.message
          ? error.response.data.message
          : error.message,
    });
  }
};
