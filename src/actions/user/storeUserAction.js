import {
    START_CREATE_USER,
    COMPLETE_CREATE_USER,
    ERROR_CREATE_USER,
  } from "../../types/user";
  import { Axios } from "../../config/Axios";
  import { notify } from "../../components/basic/Notify";
  
  export function storeUserAction(token, user) {
    return async (dispatch) => {
      dispatch(start());
      const axios = Axios(token);
      try {
        const response = await axios.post(`/register`, user);
        dispatch(complete(response.data));
        notify("Created User Successfully", "success");
      } catch (err) {
        console.log(err.response.data);
        dispatch(error(err.response.data));
        notify(err.response.data.message, "error");
      }
    };
  }
  
  export const start = () => ({
    type: START_CREATE_USER,
  });
  
  export const complete = (data) => ({
    type: COMPLETE_CREATE_USER,
    payload: data,
  });
  
  export const error = (error) => ({
    type: ERROR_CREATE_USER,
    payload: error,
  });
  