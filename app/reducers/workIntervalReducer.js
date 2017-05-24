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
  }

  return state

}

export default workIntervalReducer