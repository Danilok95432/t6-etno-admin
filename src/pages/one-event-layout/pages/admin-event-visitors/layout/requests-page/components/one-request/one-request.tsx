import { type FieldValues, FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'

import { Container } from 'src/UI/Container/Container'
import { AdminRoute } from 'src/routes/admin-routes/consts'

import { MainSection } from './components/main-section/main-section'
import { AdminButton } from 'src/UI/AdminButton/AdminButton'
import { FlexRow } from 'src/components/flex-row/flex-row'

import adminStyles from 'src/routes/admin-layout/index.module.scss'
import { useGetRequestInfoQuery } from 'src/store/events/events.api'

export const OneRequestList = () => {
	const { id = '', subId = '' } = useParams()
	const { data: reqData } = useGetRequestInfoQuery(subId)
	const [, setAction] = useState<'apply' | 'save'>('apply')
	const navigate = useNavigate()

	const methods = useForm<FieldValues>({
		mode: 'onBlur',
	})
	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		console.log(data)
		navigate(
			`/${AdminRoute.AdminEvent}/${AdminRoute.AdminEventVisitors}/${id}/${AdminRoute.Requests}`,
		)
	}

	return (
		<>
			<Container $padding='0px 30px 35px 30px'>
				<Link
					to={`/${AdminRoute.AdminEvent}/${AdminRoute.AdminEventVisitors}/${id}/${AdminRoute.Requests}`}
					className={adminStyles.adminReturnLink}
				>
					Возврат к списку заявок
				</Link>
				<FormProvider {...methods}>
					<form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
						<MainSection data={reqData} />
						<FlexRow $margin='0 0 40px 0' $maxWidth='1140px'>
							{reqData?.statusname === 'Ожидание' && (
								<>
									<AdminButton as='button' type='submit' onClick={() => setAction('save')}>
										Принять заявку
									</AdminButton>
									<AdminButton
										as='route'
										to={`/${AdminRoute.AdminEvent}/${AdminRoute.AdminEventVisitors}/${id}/${AdminRoute.Requests}`}
										$variant='cancel'
									>
										Отклонить
									</AdminButton>
								</>
							)}
							{reqData?.statusname === 'Отклонена' && (
								<>
									<AdminButton as='button' type='submit' onClick={() => setAction('save')}>
										Принять заявку
									</AdminButton>
									<AdminButton
										as='route'
										to={`/${AdminRoute.AdminEvent}/${AdminRoute.AdminEventVisitors}/${id}/${AdminRoute.Requests}`}
										$variant='pending'
									>
										В ожидающие
									</AdminButton>
								</>
							)}
							{reqData?.statusname === 'Принята' && (
								<>
									<AdminButton
										as='route'
										to={`/${AdminRoute.AdminEvent}/${AdminRoute.AdminEventVisitors}/${id}/${AdminRoute.Requests}`}
									>
										Принять заявку
									</AdminButton>
									<AdminButton
										as='route'
										to={`/${AdminRoute.AdminEvent}/${AdminRoute.AdminEventVisitors}/${id}/${AdminRoute.Requests}`}
										$variant='cancel'
									>
										Отклонить
									</AdminButton>
								</>
							)}
						</FlexRow>
					</form>
				</FormProvider>
				<Link
					to={`/${AdminRoute.AdminEvent}/${AdminRoute.AdminEventVisitors}/${id}/${AdminRoute.Requests}`}
					className={adminStyles.adminReturnLink}
				>
					Возврат к списку заявок
				</Link>
			</Container>
		</>
	)
}
