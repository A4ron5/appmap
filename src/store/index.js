import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const rootReducer = combineReducers({})

export const store = createStore(rootReducer, applyMiddleware(thunk, logger))