import * as types from 'actions'

const initialState = {
  workIntervals: [],
  workIntervalsContainerShouldUpdate: false
}

const workIntervalReducer = function (state = initialState, action) {

  switch (action.type) {
    case types.GET_WORK_INTERVALS_SUCCESS:
      return Object.assign({}, state, {
        workIntervals: action.workIntervals,
        workIntervalsContainerShouldUpdate: false
      })
    case types.UPDATE_WORK_INTERVALS_CONTAINER:
      return Object.assign({}, state, {
        workIntervalsContainerShouldUpdate: true
      })
  }

  return state

}

export default workIntervalReducer