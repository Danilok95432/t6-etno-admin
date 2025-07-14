import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { Link, useNavigate, useParams } from 'react-router-dom'

import { Container } from 'src/UI/Container/Container'
import { AdminButton } from 'src/UI/AdminButton/AdminButton'
import { AdminRoute } from 'src/routes/admin-routes/consts'

import adminStyles from 'src/routes/admin-layout/index.module.scss'
import styles from './index.module.scss'
import { useIsSent } from 'src/hooks/sent-mark/sent-mark'
import { useGetSubEventInfoQuery, useSaveSubEventInfoMutation } from 'src/store/events/events.api'
import { type ProgramInputs } from './schema'
import { MainSection } from './components/main-section/main-section'
import { SelectSection } from './components/select-section/select-section'
import { DescSection } from './components/desc-section/desc-section'
import { AdditionalSection } from './components/additional-section/additional-section'
import { FlexRow } from 'src/components/flex-row/flex-row'
import { useEffect, useState } from 'react'
import { DocsSection } from './components/docs-section/docs-section'
import { booleanToNumberString, transformToFormData } from 'src/helpers/utils'

export const OneProgram = () => {
	const { id = '', programId = '' } = useParams()
	const { data: programInfo } = useGetSubEventInfoQuery(programId)
	const [saveSubEvent] = useSaveSubEventInfoMutation()

	const methods = useForm<ProgramInputs>({
		mode: 'onBlur',
	})

	const { isSent, markAsSent } = useIsSent(methods.control)
	const [action, setAction] = useState<'apply' | 'save'>('apply')

	const navigate = useNavigate()

	const onSubmit: SubmitHandler<ProgramInputs> = async (data) => {
		const serverData = {
			title: data.title,
			itemdate: data.itemdate,
			place: data.place,
			begin_time: data.begin_time,
			end_time: data.end_time,
			use_end_time: booleanToNumberString(data.use_end_time),
			short: data.short,
			rules: data.rules,
			reglament: data.reglament,
			trebovania: data.trebovania,
			use_reg: booleanToNumberString(data.use_reg),
			use_group: booleanToNumberString(data.use_group),
			id_vid:
				typeof data.vids_list === 'string'
					? data.vids_list
					: data.vids_list
						? data.vids_list[0].value
						: '0',
			id_organizator:
				typeof data.organizators_list === 'string'
					? data.organizators_list
					: data.organizators_list
						? data.organizators_list[0].value
						: '0',
		}
		const subForm = transformToFormData(serverData)
		subForm.append('id', programId)
		const res = await saveSubEvent(subForm)
		if (res) {
			markAsSent(true)
			if (action === 'save') {
				navigate(`/${AdminRoute.AdminEventLayout}/${AdminRoute.AdminEventsList}`)
			}
		}
		if (res) {
			markAsSent(true)
			navigate(`/${AdminRoute.AdminEvent}/${AdminRoute.AdminEventPartners}/${id}`)
		}
	}

	useEffect(() => {
		if (programInfo) {
			methods.reset({ ...programInfo })
		}
	}, [programInfo])

	return (
		<div className={styles.onePartnerPage}>
			<Link
				to={`/${AdminRoute.AdminEvent}/${AdminRoute.AdminEventProgram}/${id}`}
				className={adminStyles.adminReturnLink}
			>
				Возврат к списку подсобытий
			</Link>
			<h3>Название подсобытия</h3>
			<Container
				$padding='0 0 40px 0'
				$paddingMobile='0 0 40px 0'
				$margin='0'
				className={styles.containerEventPartners}
			>
				<FormProvider {...methods}>
					<form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
						<MainSection />
						<SelectSection vidList={programInfo?.vids_list} />
						<AdditionalSection organizatorsList={programInfo?.organizators_list} />
						<DescSection />
						<DocsSection />
						<FlexRow $margin='0 0 40px 0' $maxWidth='1140px' $justifyContent='space-between'>
							<FlexRow>
								<AdminButton as='button' type='submit' onClick={() => setAction('save')}>
									Сохранить и выйти
								</AdminButton>
								<AdminButton
									as='button'
									type='submit'
									$variant={isSent ? 'sent' : 'light'}
									onClick={() => setAction('apply')}
								>
									Применить и продолжить
								</AdminButton>
							</FlexRow>
							<AdminButton
								as='route'
								to={`/${AdminRoute.AdminEventLayout}/${AdminRoute.AdminCiclesList}`}
								$variant='cancel'
							>
								Отменить изменения
							</AdminButton>
						</FlexRow>
					</form>
				</FormProvider>
			</Container>
			<Link
				to={`/${AdminRoute.AdminEvent}/${AdminRoute.AdminEventProgram}/${id}`}
				className={adminStyles.adminReturnLink}
			>
				Возврат к списку подсобытий
			</Link>
		</div>
	)
}
