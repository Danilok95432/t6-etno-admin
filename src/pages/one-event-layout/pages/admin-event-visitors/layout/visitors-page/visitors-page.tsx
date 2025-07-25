import { type FC } from 'react'

import { Helmet } from 'react-helmet-async'
import { Outlet } from 'react-router-dom'

export const VisitorPage: FC = () => {
	return (
		<>
			<Helmet>
				<title>Посетители</title>
			</Helmet>
			<Outlet />
		</>
	)
}
