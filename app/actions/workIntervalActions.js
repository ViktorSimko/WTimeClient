import * as types from 'actions'

export function getWorkIntervalsSuccess(workIntervals) {
  return {
    type: types.GET_WORK_INTERVALS_SUCCESS,
    workIntervals
  }
}

export function updateWorkIntervalsContainer() {
  return {
    type: types.UPDATE_WORK_INTERVALS_CONTAINER
  }
}