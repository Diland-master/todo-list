import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button/Button'

export const NotFound = () => {
	const navigate = useNavigate()

	const handleGoMain = () => navigate('/')

	return (
		<>
			<h1>404</h1>
			<p>Страница не существует или была удалена.</p>
			<Button onClick={handleGoMain}>На главную</Button>
		</>
	)
}
