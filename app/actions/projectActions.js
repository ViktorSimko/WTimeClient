import * as types from 'actions'

export function getProjectsSuccess(projects) {
  return {
    type: types.GET_PROJECTS_SUCCESS,
    projects,
  }
}

export function getProjectSuccess(project) {
  return {
    type: types.GET_PROJECT_SUCCESS,
    project,
  }
}

export function selectedProject(id) {
  return {
    type: types.SELECTED_PROJECT,
    id,
  }
}