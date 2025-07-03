import { ACTION_TYPE } from '../actions'

const editingTodoInitialState = {
	id: null,
	title: '',
}

export const editingTodoReducer = (state = editingTodoInitialState, { type, payload }) => {
	switch (type) {
		case ACTION_TYPE.EDIT_TODO:
			return { ...state, ...payload }
		case ACTION_TYPE.FINISH_EDIT_TODO:
			return editingTodoInitialState
		default:
			return state
	}
}
