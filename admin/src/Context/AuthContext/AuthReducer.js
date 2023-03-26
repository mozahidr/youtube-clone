export const AuthReducer = (state, actioin) => {
  switch (actioin.type) {
    case 'LOGIN_START':
      return {
        user: null,
        isFetching: true,
        error: false,
      };
    case 'LOGIN_SUCCESS':
      return {
        user: actioin.payload,
        isFetching: false,
        error: false,
      };
    case 'LOGIN_FAILURE':
      return {
        user: null,
        isFetching: false,
        error: true,
      };
      case 'LOGOUT':
      return {
        user: null,
        isFetching: false,
        error: false,
      };
    default:
      return {
        ...state,
      };
  }
};
