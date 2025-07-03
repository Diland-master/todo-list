import { useDispatch, useSelector } from 'react-redux'
import styles from './SortingTodo.module.css'
import { ACTION_TYPE } from '../../actions'
import { selectIsSorting } from '../../selectors'

export const SortingTodo = () => {
	const dispatch = useDispatch()
	const isSorting = useSelector(selectIsSorting)

	const handleChange = ({ target }) => dispatch({ type: ACTION_TYPE.SET_SORTING, payload: target.checked })

	return (
		<label className={styles.label}>
			<input type="checkbox" checked={isSorting} onChange={handleChange} />
			Сортировать (А–Я)
		</label>
	)
}
