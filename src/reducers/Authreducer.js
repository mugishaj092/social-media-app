export const authReducer = (
  state = { authData: null, loading: false, error: false },
  action
) => {
  switch (action.type) {
    case "AUTH_START":
      return {
        ...state,
        loading: true,
        error: false,
      };
      case "AUTH_SUCCESS":
        window.localStorage.setItem("profile",JSON.stringify({...action?.payload}))
        return{
            ...state,
            loading:false,
            authData:action.payload,
            error:false
        }
        case "AUTH_FAIL":
            return{
               ...state,
                loading:false,
                authData:null,
                error:true
            }
    default:
      return state;
  }
};
