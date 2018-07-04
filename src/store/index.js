import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import { input } from '../features/input'

const rootReducer = combineReducers({ input })

export const store = createStore(rootReducer, applyMiddleware(thunk, logger))