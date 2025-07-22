import { useEffect, useState, type FC } from 'react'
import {
	type EventContactsInputs,
	eventContactsSchema,
} from 'src/pages/one-event-layout/pages/admin-event-contacts/schema'

import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link, useParams } from 'react-router-dom'
import { useGetContactsByEventIdQuery } from 'src/store/events/events.api'

import { AdminContent } from 'src/components/admin-content/admin-content'
import { AdminRoute } from 'src/routes/admin-routes/consts'
import { AdminControllers } from 'src/components/admin-controllers/admin-controllers'

import adminStyles from 'src/routes/admin-layout/index.module.scss'
import { useIsSent } from 'src/hooks/sent-mark/sent-mark'

import styles from './index.module.scss'
import { PoliticSection } from './components/politic-section/politic-section'
import { RulesSection } from './components/rules-section/rules-section'

export const AdminEventRules: FC = () => {
	const { id = '0' } = useParams()
	const { data: contactsInfoData } = useGetContactsByEventIdQuery(id)

	const methods = useForm<EventContactsInputs>({
		mode: 'onBlur',
		resolver: yupResolver(eventContactsSchema),
	})
	const { isSent } = useIsSent(methods.control)
	const [, setAction] = useState<'apply' | 'save'>('apply')

	const onSubmit: SubmitHandler<EventContactsInputs> = async (data) => {
		console.log(data)
	}

	useEffect(() => {
		if (contactsInfoData) {
			methods.reset({ ...contactsInfoData })
		}
	}, [contactsInfoData])

	return (
		<AdminContent className={styles.eventRulesPage}>
			<Link
				to={`/${AdminRoute.AdminEventLayout}/${AdminRoute.AdminEventsList}`}
				className={adminStyles.adminReturnLink}
			>
				Возврат к списку событий
			</Link>
			<h3>Правила</h3>
			<FormProvider {...methods}>
				<form onSubmit={methods.handleSubmit(onSubmit)} noValidate autoComplete='off'>
					<RulesSection />
					<PoliticSection />
					<AdminControllers
						variant='4'
						outLink={`/${AdminRoute.AdminEventLayout}/${AdminRoute.AdminEventsList}`}
						isSent={isSent}
						actionHandler={setAction}
					/>
				</form>
			</FormProvider>
			<Link
				to={`/${AdminRoute.AdminEventLayout}/${AdminRoute.AdminEventsList}`}
				className={adminStyles.adminReturnLink}
			>
				Возврат к списку событий
			</Link>
		</AdminContent>
	)
}
