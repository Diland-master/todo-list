import { Navigate, Route, Routes } from 'react-router-dom'
import { MainPage, TodoPage } from './pages'
import { useState } from 'react'
import { NotFound } from './pages/NotFound/NotFound'

export const App = () => {
	const [refreshTodosFlag, setRefreshTodosFlag] = useState(false)

	const refreshTodos = () => setRefreshTodosFlag(!refreshTodosFlag)

	return (
		<Routes>
			<Route path="/" element={<MainPage refreshTodos={refreshTodos} refreshTodosFlag={refreshTodosFlag} />} />
			<Route path="/task/:id" element={<TodoPage refreshTodos={refreshTodos} refreshTodosFlag={refreshTodosFlag} />} />
			<Route path="/404" element={<NotFound />} />
			<Route path="*" element={<Navigate to="/404" />} />
		</Routes>
	)
}
