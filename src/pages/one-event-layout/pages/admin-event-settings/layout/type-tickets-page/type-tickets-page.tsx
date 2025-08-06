import { type FC } from 'react'

import { Helmet } from 'react-helmet-async'
import { Outlet } from 'react-router-dom'

export const TypeTicketsPage: FC = () => {
	return (
		<>
			<Helmet>
				<title>Виды билетов</title>
			</Helmet>
			<Outlet />
		</>
	)
}
