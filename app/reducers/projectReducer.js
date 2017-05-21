import * as types from 'actions'

const initialState = {
  projects: [],
  project: null
}

const projectReducer = function (state = initialState, action) {

  switch (action.type) {
    case types.GET_PROJECTS_SUCCESS:
      return {projects: action.projects}
    case types.GET_PROJECT_SUCCESS:
      return {project: action.project}
  }

  return state

}

export default projectReducer