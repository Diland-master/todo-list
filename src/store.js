import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { editingTodoReducer, todosReducer, uiReducer } from './reducers'
import { thunk } from 'redux-thunk'

const reducer = combineReducers({
	todos: todosReducer,
	ui: uiReducer,
	editingTodo: editingTodoReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))
