export const selectTodos = ({ todos }) => todos

export const selectIsLoading = ({ ui }) => ui.isLoading

export const selectSearchInput = ({ ui }) => ui.searchInput

export const selectIsSorting = ({ ui }) => ui.isSorting

export const selectEditingTodoId = ({ editingTodo }) => editingTodo.id

export const selectEditingTodoTitle = ({ editingTodo }) => editingTodo.title
