import { useEffect, useState } from 'react'
import styles from './App.module.css'
import { Todo } from './components'

export const App = () => {
	const [todos, setTodos] = useState([])
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		setIsLoading(true)

		fetch('https://jsonplaceholder.typicode.com/todos')
			.then((loadedData) => loadedData.json())
			.then((loadedTodos) => setTodos(loadedTodos))
			.finally(() => setIsLoading(false))
	}, [])

	return (
		<>
			<h1>Список задач</h1>
			{isLoading ? (
				<div className={styles.loader}></div>
			) : (
				<div>
					{todos.map(({ id, title, completed }) => (
						<Todo key={id} title={title} completed={completed} />
					))}
				</div>
			)}
		</>
	)
}
