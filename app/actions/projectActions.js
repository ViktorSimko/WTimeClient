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

export function showEditProjectDialog(project) {
  return {
    type: types.SHOW_EDIT_PROJECT,
    editingProject: project,
  }
}

export function hideEditProjectDialog() {
  return {
    type: types.HIDE_EDIT_PROJECT
  }
}

export function updateProjectsContainer() {
  return {
    type: types.UPDATE_PROJECTS_CONTAINER
  }
}

export function updateProjectContainer() {
  return {
    type: types.UPDATE_PROJECT_CONTAINER
  }
}

// export function updatedTasksContainer() {
//   return {
//     type: types.UPDATED_TASKS_CONTAINER
//   }
// }