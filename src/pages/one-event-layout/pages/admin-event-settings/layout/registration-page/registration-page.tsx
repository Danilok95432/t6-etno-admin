import { type FC } from 'react'

import { Helmet } from 'react-helmet-async'
import { Outlet } from 'react-router-dom'

export const RegistrationPage: FC = () => {
	return (
		<>
			<Helmet>
				<title>Регистрация</title>
			</Helmet>
			<Outlet />
		</>
	)
}
