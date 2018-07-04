import { ADD_ROUTE_TO_LIST } from './action'
import { REMOVE_ROUTE } from './action'

export const input = (state = { routes: [] }, action) => {
  switch(action.type) {
    case ADD_ROUTE_TO_LIST:
      return {
        ...state,
        routes: [...state.routes, action.route]
      }
    case REMOVE_ROUTE:
      return {
        ...state,
        routes: state.routes.filter(route => route !== action.route)
      }  
    default: 
      return state
  }
}