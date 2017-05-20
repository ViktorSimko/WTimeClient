import * as types from 'actions'

export function loginSuccess({username, accessToken}) {
  return {
    type: types.LOGIN_SUCCESS,
    username,
    accessToken
  }
}

export function logoutSuccess() {
  return {
    type: types.LOGOUT_SUCCESS,
  }
}