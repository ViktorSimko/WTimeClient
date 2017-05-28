import * as types from 'actions'

export function updateProjectStats() {
  return {
    type: types.UPDATE_PROJECT_STATS
  }
}

export function updateTaskStats() {
  return {
    type: types.UPDATE_TASK_STATS
  }
}

export function getProjectStatsSuccess(stats) {
  return {
    type: types.GET_PROJECT_STATS_SUCCESS,
    stats
  }
}

export function getTaskStatsSuccess(stats) {
  return {
    type: types.GET_TASK_STATS_SUCCESS,
    stats
  }
}