import * as types from 'actions'

const initialState = {
  projects: []
}

const projectReducer = function (state = initialState, action) {

  switch (action.type) {
    case types.GET_PROJECTS_SUCCESS:
      return {projects: action.projects}
  }

  return state

}

export default projectReducer