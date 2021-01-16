import { combineReducers } from 'redux'

import events from './events'
import operationLogs from './operationLogs'

combineReducers({ events })

export default combineReducers({ events, operationLogs })