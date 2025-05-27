import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { useDeleteTodo, useReadTodo } from '../../hooks'
import { Loader, TodoCompletedCheckbox, TodoItem, TodoTitle, IconButton } from '../../components'
import { IconBack, IconDelete } from '../../icons'
import styles from './TodoPage.module.css'

export const TodoPage = ({ refreshTodos, refreshTodosFlag }) => {
	const { id } = useParams()
	const navigate = useNavigate()
	const { todo, isLoadingTodo, isNotFound } = useReadTodo(id, refreshTodosFlag)
	const { handleDeleteTodo } = useDeleteTodo(id)

	const handleGoBack = () => navigate(-1)

	if (isNotFound) {
		return <Navigate to="/404" />
	}

	return (
		<>
			<div className={styles.headPage}>
				<h1>Страница задачи</h1>
				<IconButton onClick={handleGoBack}>
					<IconBack />
				</IconButton>
			</div>

			{isLoadingTodo ? (
				<Loader />
			) : (
				todo && (
					<TodoItem>
						<TodoTitle id={id} title={todo.title} refreshTodos={refreshTodos} />
						<TodoCompletedCheckbox id={id} title={todo.title} completed={todo.completed} refreshTodos={refreshTodos} />
						<IconButton className={styles.iconDelete} onClick={handleDeleteTodo}>
							<IconDelete />
						</IconButton>
					</TodoItem>
				)
			)}
		</>
	)
}
