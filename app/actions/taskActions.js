import * as types from 'actions'

export function getTasksSuccess(tasks) {
  return {
    type: types.GET_TASKS_SUCCESS,
    tasks,
  }
}

export function getTaskSuccess(task) {
  return {
    type: types.GET_TASK_SUCCESS,
    task,
  }
}

export function selectedTask(id) {
  return {
    type: types.SELECTED_TASK,
    id,
  }
}

export function showEditTaskDialog(task) {
  return {
    type: types.SHOW_EDIT_TASK,
    editingTask: task,
  }
}

export function hideEditTaskDialog() {
  return {
    type: types.HIDE_EDIT_TASK
  }
}

export function deleteTaskSuccess(id) {
  return {
    type: types.DELETE_TASK_SUCCESS,
    id
  }
}

export function updateTasksContainer() {
  return {
    type: types.UPDATE_TASKS_CONTAINER
  }
}

export function updateTaskContainer() {
  return {
    type: types.UPDATE_TASK_CONTAINER
  }
}