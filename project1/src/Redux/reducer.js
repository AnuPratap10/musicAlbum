import * as types from "./actionType";
const initState = {
  watches: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initState, action) => {
  const {type, payload} = action;
  switch (type) {
    case types.GET_WATCH_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.GET_WATCH_SUCCESS:
      return {
        ...state,
        watches: payload,
        isLoading: false,
        isError: false,
      };
    case types.GET_WATCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default: {
      return state;
    }
  }
};
