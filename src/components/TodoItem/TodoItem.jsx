import styles from './TodoItem.module.css'

export const TodoItem = ({ children }) => {
	return <div className={styles.item}>{children}</div>
}
