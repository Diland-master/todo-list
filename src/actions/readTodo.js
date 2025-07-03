import { TODOS_ENDPOINT } from '../config/api'
import { ACTION_TYPE } from './actionType'

export const readTodo = () => (dispatch) => {
	dispatch({ type: ACTION_TYPE.LOADING_START })

	return fetch(TODOS_ENDPOINT)
		.then((res) => res.json())
		.then((loadedTodos) => dispatch({ type: ACTION_TYPE.SET_TODOS, payload: loadedTodos }))
		.finally(() => dispatch({ type: ACTION_TYPE.LOADING_END }))
}
