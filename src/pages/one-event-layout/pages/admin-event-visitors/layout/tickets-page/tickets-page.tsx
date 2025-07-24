import { type FC } from 'react'

import { Helmet } from 'react-helmet-async'
import { Outlet } from 'react-router-dom'

export const TicketsPage: FC = () => {
	return (
		<>
			<Helmet>
				<title>Билеты</title>
			</Helmet>
			<Outlet />
		</>
	)
}
