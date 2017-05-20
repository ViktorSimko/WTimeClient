import * as types from 'actions'

export function getProjectsSuccess(projects) {
  return {
    type: types.GET_PROJECTS_SUCCESS,
    projects,
  }
}