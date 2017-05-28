import * as types from 'actions'

const initialState = {
  tasks: [],
  task: null,
  selectedTask: null,
  edit: false,
  editingTask: null,
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
    case types.SHOW_EDIT_TASK:
      return Object.assign({}, state, {
        edit: true,
        editingTask: action.editingTask,
      })
    case types.HIDE_EDIT_TASK:
      return Object.assign({}, state, {
        edit: false,
        editingTask: null,
      })
    case types.UPDATE_TASKS_CONTAINER:
      return Object.assign({}, state, {
        tasksContainerShouldUpdate: true
      })
    case types.UPDATE_TASK_CONTAINER:
      return Object.assign({}, state, {
        taskContainerShouldUpdate: true
      })
  }

  return state

}

export default taskReducer