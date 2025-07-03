import { TODOS_ENDPOINT } from '../config/api'
import { ACTION_TYPE } from './actionType'

export const deleteTodo = (id) => (dispatch) => {
	dispatch({ type: ACTION_TYPE.LOADING_START })

	return fetch(TODOS_ENDPOINT + `/${id}`, { method: 'DELETE' })
		.then((res) => res.json())
		.then(() => dispatch({ type: ACTION_TYPE.REMOVE_TODO, payload: id }))
		.finally(() => dispatch({ type: ACTION_TYPE.LOADING_END }))
}
