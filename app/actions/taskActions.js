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