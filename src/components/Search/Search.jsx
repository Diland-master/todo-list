import styles from './Search.module.css'

export const Search = ({ searchText, onSearchChange }) => {
	const handleChange = ({ target }) => onSearchChange(target.value)

	return <input className={styles.searchInput} type="text" placeholder="Поиск..." value={searchText} onChange={handleChange} />
}
