import * as types from 'actions'

const initialState = {
  projects: [],
  project: null,
  selectedProject: null,
  projectsContainerShouldUpdate: false,
  projectContainerShouldUpdate: false,
}

const projectReducer = function (state = initialState, action) {

  switch (action.type) {
    case types.GET_PROJECTS_SUCCESS:
      return Object.assign({}, state, {
        projects: action.projects,
        projectsContainerShouldUpdate: false
      })
    case types.GET_PROJECT_SUCCESS:
      return Object.assign({}, state, {
        project: action.project,
        projectContainerShouldUpdate: false
      })
    case types.SELECTED_PROJECT:
      return Object.assign({}, state, {
        selectedProject: action.id,
        projectContainerShouldUpdate: true,
      })
  }

  return state

}

export default projectReducer