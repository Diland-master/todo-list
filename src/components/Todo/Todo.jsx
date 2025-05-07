import styles from './Todo.module.css'

export const Todo = ({ title, completed }) => {
	return (
		<div className={styles.todo}>
			{title}
			<input className={styles.checkbox} type="checkbox" checked={completed} readOnly />
		</div>
	)
}
