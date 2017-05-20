import * as types from 'actions' 

const initialState = {
  isLoggedIn: false,
  username: null,
  accessToken: null

}

const userReducer = function (state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return Object.assign({}, state, {isLoggedIn: true, username: action.username, accessToken: action.accessToken})
      
    case types.LOGOUT_SUCCESS:
      return {isLoggedIn: false, username: null, accessToken: null} 

  }

  return state
}

export default userReducer;