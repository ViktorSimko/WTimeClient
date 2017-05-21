import * as types from 'actions'

const initialState = {
  projects: [],
  project: null,
  selectedProject: null,
  projectViewShouldUpdate: false
}

const projectReducer = function (state = initialState, action) {

  switch (action.type) {
    case types.GET_PROJECTS_SUCCESS:
      return Object.assign({}, state, {
        projects: action.projects
      })
    case types.GET_PROJECT_SUCCESS:
      return Object.assign({}, state, {
        project: action.project,
        projectViewShouldUpdate: false
      })
    case types.SELECTED_PROJECT:
      return Object.assign({}, state, {
        selectedProject: action.id,
        projectViewShouldUpdate: true
      })
  }

  return state

}

export default projectReducer