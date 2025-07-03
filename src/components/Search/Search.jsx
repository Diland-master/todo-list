import { useDispatch, useSelector } from 'react-redux'
import styles from './Search.module.css'
import { ACTION_TYPE } from '../../actions'
import { selectSearchInput } from '../../selectors'

export const Search = () => {
	const dispatch = useDispatch()
	const searchInput = useSelector(selectSearchInput)

	const handleChange = ({ target }) => dispatch({ type: ACTION_TYPE.SET_SEARCH_INPUT, payload: target.value })

	return <input className={styles.searchInput} type="text" placeholder="Поиск..." value={searchInput} onChange={handleChange} />
}
