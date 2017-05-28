import * as types from 'actions'

const initialState = {
  projectStats: null,
  projectStatsShouldUpdate: true,
  taskStats: null,
  taskStatsShouldUpdate: true
}

const statsReducer = function (state = initialState, action) {

  switch (action.type) {
    case types.GET_PROJECT_STATS_SUCCESS:
      return Object.assign({}, state, {
        projectStats: action.stats,
        projectStatsShouldUpdate: false
      })
    case types.GET_TASK_STATS_SUCCESS:
      return Object.assign({}, state, {
        taskStats: action.stats,
        taskStatsShouldUpdate: false
      })
    case types.UPDATE_PROJECT_STATS:
      return Object.assign({}, state, {
        projectStatsShouldUpdate: true
      })
    case types.UPDATE_TASK_STATS:
      return Object.assign({}, state, {
        taskStatsShouldUpdate: true
      })
  }

  return state

}

export default statsReducer