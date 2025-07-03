import { TODOS_ENDPOINT } from '../config/api'
import { ACTION_TYPE } from './actionType'

export const updateTodo = (newTodoData) => (dispatch) => {
	dispatch({ type: ACTION_TYPE.LOADING_START })

	return fetch(TODOS_ENDPOINT + `/${newTodoData.id}`, {
		method: 'PATCH',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify(newTodoData),
	})
		.then((res) => res.json())
		.then(() => dispatch({ type: ACTION_TYPE.UPDATE_TODO, payload: newTodoData }))
		.finally(() => dispatch({ type: ACTION_TYPE.LOADING_END }))
}
