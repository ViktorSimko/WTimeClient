import * as types from 'actions'

const initialState = {
  tasks: [],
  task: null,
  selectedTask: null,
  tasksContainerShouldUpdate: false,
  taskContainerShouldUpdate: false
}

const taskReducer = function (state = initialState, action) {

  switch (action.type) {
    case types.GET_TASKS_SUCCESS:
      return Object.assign({}, state, {
        tasks: action.tasks,
        tasksContainerShouldUpdate: false
      })
    case types.GET_TASK_SUCCESS:
      return Object.assign({}, state, {
        task: action.task,
        taskContainerShouldUpdate: false
      })
    case types.SELECTED_TASK:
      return Object.assign({}, state, {
        selectedTask: action.id,
        taskContainerShouldUpdate: true
      })
  }

  return state

}

export default taskReducer