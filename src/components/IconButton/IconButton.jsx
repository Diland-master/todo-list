import styles from './IconButton.module.css'

export const IconButton = ({ children, onClick, type = 'button', className = '' }) => {
	return (
		<button type={type} className={`${styles.iconButton} ${className}`} onClick={onClick}>
			{children}
		</button>
	)
}
