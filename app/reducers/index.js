import {combineReducers} from 'redux'

import userReducer from 'userReducer'
import projectReducer from 'projectReducer'
import taskReducer from 'taskReducer'
import workIntervalReducer from 'workIntervalReducer'

var reducers = combineReducers({
  userState: userReducer,
  projectState: projectReducer,
  taskState: taskReducer,
  workIntervalState: workIntervalReducer
})

export default reducers