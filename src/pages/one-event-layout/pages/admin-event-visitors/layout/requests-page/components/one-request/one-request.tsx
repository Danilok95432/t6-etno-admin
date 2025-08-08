import { type FieldValues, FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'

import { Container } from 'src/UI/Container/Container'
import { AdminRoute } from 'src/routes/admin-routes/consts'

import { MainSection } from './components/main-section/main-section'
import { AdminButton } from 'src/UI/AdminButton/AdminButton'
import { FlexRow } from 'src/components/flex-row/flex-row'

import adminStyles from 'src/routes/admin-layout/index.module.scss'

export const OneRequestList = () => {
	const { id = '' } = useParams()
	const [, setAction] = useState<'apply' | 'save'>('apply')
	const navigate = useNavigate()
	const status = '1'

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
						<MainSection
							isGroup={false}
							status={status}
							subEvents={[{ title: 'Народные ремесла Тамбовщины', id: '1' }]}
							participants={[
								{ fio: 'Участник 1', id: '1' },
								{ fio: 'Участник 2', id: '2' },
							]}
							cars={[
								{ type: 'Машина', id: '1', number: 'А222АА' },
								{ type: 'Машина', id: '2', number: 'А222АБ' },
							]}
							services={[
								{ title: 'Сервис 1', id: '1' },
								{ title: 'Сервис 2', id: '2' },
								{ title: 'Сервис 3', id: '3' },
							]}
							createdate={new Date().toISOString()}
						/>
						<FlexRow $margin='0 0 40px 0' $maxWidth='1140px'>
							{status === '1' && (
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
							{/*
								{status === '2' && (
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
							{status === '3' && (
								<>
									<AdminButton
										as='route'
										to={`/${AdminRoute.AdminEvent}/${AdminRoute.AdminEventVisitors}/${id}/${AdminRoute.Requests}`}
										$variant='pending'
									>
										В ожидающие
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
								*/}
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
