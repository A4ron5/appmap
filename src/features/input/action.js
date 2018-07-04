export const ADD_ROUTE_TO_LIST = 'ADD_ROUTE_TO_LIST'
export const REMOVE_ROUTE = 'REMOVE_ROUTE'

export const addRouteToList = (route) => ({
  type: ADD_ROUTE_TO_LIST,
  route 
})

export const removeRoute = (route) => ({
  type: REMOVE_ROUTE,
  route
})