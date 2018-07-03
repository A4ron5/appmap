import { ADD_ROUTE_TO_LIST } from './action'

export const routes = (state = { routes: [] }, action) => {
  switch(action.type) {
    case ADD_ROUTE_TO_LIST:
      return {
        ...state,
        routes: [...state.routes, action.route]
      } 
    default: 
      return state
  }
}