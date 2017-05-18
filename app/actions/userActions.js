import * as types from 'actions/action-types'

export function loginSuccess({username, accessToken}) {
  return {
    type: types.LOGIN_SUCCESS,
    username,
    accessToken
  }
}