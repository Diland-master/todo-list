import { TODOS_ENDPOINT } from '../config/api'
import { ACTION_TYPE } from './actionType'

export const createTodo = (title) => (dispatch) => {
	if (!title.trim()) return

	dispatch({ type: ACTION_TYPE.LOADING_START })

	return fetch(TODOS_ENDPOINT, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify({
			title,
			completed: false,
		}),
	})
		.then((res) => res.json())
		.then((newTodo) => dispatch({ type: ACTION_TYPE.ADD_TODO, payload: newTodo }))
		.finally(() => dispatch({ type: ACTION_TYPE.LOADING_END }))
}
