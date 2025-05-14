import styles from './SortingTodo.module.css'

export const SortingTodo = ({ isSorted, onSortChange }) => {
	const handleChange = ({ target }) => onSortChange(target.checked)

	return (
		<label className={styles.label}>
			<input type="checkbox" checked={isSorted} onChange={handleChange} />
			Сортировать (А–Я)
		</label>
	)
}
