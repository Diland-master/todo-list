import { ACTION_TYPE } from '../actions/actionType'

const uiInitialState = {
	searchInput: '',
	isSorting: false,
	isLoading: true,
}

export const uiReducer = (state = uiInitialState, { type, payload }) => {
	switch (type) {
		case ACTION_TYPE.LOADING_START:
			return {
				...state,
				isLoading: true,
			}
		case ACTION_TYPE.LOADING_END:
			return {
				...state,
				isLoading: false,
			}
		case ACTION_TYPE.SET_SEARCH_INPUT:
			return {
				...state,
				searchInput: payload,
			}
		case ACTION_TYPE.SET_SORTING:
			return {
				...state,
				isSorting: payload,
			}
		default:
			return state
	}
}
