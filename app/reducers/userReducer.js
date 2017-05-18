import * as types from 'actions/action-types' 

const initialState = {

  userName: null,
  accessToken: null

}

const userReducer = function (state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return Object.assign({}, state, {userName: action.userName, accessToken: action.accessToken})
      
    case types.LOGOUT_SUCCESS:
      return {userName: null, accessToken: null} 

  }

  return state
}

export default userReducer;