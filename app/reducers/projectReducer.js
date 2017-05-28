import * as types from 'actions'

const initialState = {
  projects: [],
  project: null,
  selectedProject: null,
  edit: false,
  editingProject: null,
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
    case types.SHOW_EDIT_PROJECT:
      return Object.assign({}, state, {
        edit: true,
        editingProject: action.editingProject,
      })
    case types.HIDE_EDIT_PROJECT:
      return Object.assign({}, state, {
        edit: false,
        editingProject: null,
      })
    case types.DELETE_PROJECT_SUCCESS:
      {
        if (state.selectedProject === action.id) {
          return Object.assign({}, state, {
            project: null,
            selectedProject: null,
            projectsContainerShouldUpdate: true
          })
        }

        return Object.assign({}, state, {
          projectsContainerShouldUpdate: true
        })
      }
    case types.UPDATE_PROJECTS_CONTAINER:
      return Object.assign({}, state, {
        projectsContainerShouldUpdate: true
      })
    case types.UPDATE_PROJECT_CONTAINER:
      return Object.assign({}, state, {
        projectContainerShouldUpdate: true
      })
  }

  return state

}

export default projectReducer