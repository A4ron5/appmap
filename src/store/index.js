import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import { routes } from '../features/input'

const rootReducer = combineReducers({ routes })

export const store = createStore(rootReducer, applyMiddleware(thunk, logger))