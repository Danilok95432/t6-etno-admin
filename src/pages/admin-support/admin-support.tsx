import { type FC } from 'react'
import { Helmet } from 'react-helmet-async'
import { AdminContent } from 'src/components/admin-content/admin-content'

export const AdminSupport: FC = () => {
	return (
		<>
			<Helmet>
				<title>Поддержка</title>
			</Helmet>
			<h1>Поддержка</h1>
			<AdminContent>В разработке...</AdminContent>
		</>
	)
}
