import {combineReducers} from 'redux'

import userReducer from 'userReducer'
import projectReducer from 'projectReducer'
import taskReducer from 'taskReducer'
import workIntervalReducer from 'workIntervalReducer'
import statsReducer from 'statsReducer'

var reducers = combineReducers({
  userState: userReducer,
  projectState: projectReducer,
  taskState: taskReducer,
  workIntervalState: workIntervalReducer,
  statsState: statsReducer
})

export default reducers