import { type OneVisitorInputs, oneVisitorSchema } from './schema'
import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'

import { useGetNewsInfoQuery, useSaveNewsInfoMutation } from 'src/store/news/news.api'
import { transformToFormData } from 'src/helpers/utils'
import { useIsSent } from 'src/hooks/sent-mark/sent-mark'

import { Container } from 'src/UI/Container/Container'
import { AdminControllers } from 'src/components/admin-controllers/admin-controllers'
import { AdminRoute } from 'src/routes/admin-routes/consts'

import { MainSection } from './components/main-section/main-section'

export const OneVisitor = () => {
	const { id = '0' } = useParams()

	const { data: newsInfoData } = useGetNewsInfoQuery(id)
	const [saveNewsInfo] = useSaveNewsInfoMutation()
	const [action, setAction] = useState<'apply' | 'save'>('apply')
	const navigate = useNavigate()

	const methods = useForm<OneVisitorInputs>({
		mode: 'onBlur',
		resolver: yupResolver(oneVisitorSchema),
	})
	const { isSent, markAsSent } = useIsSent(methods.control)
	const onSubmit: SubmitHandler<OneVisitorInputs> = async (data) => {
		const serverData = {}
		const newsInfoFormData = transformToFormData(serverData)
		const newsId = id
		newsInfoFormData.append('id', newsId)
		const res = await saveNewsInfo(newsInfoFormData)
		if (res) {
			markAsSent(true)
			if (action === 'save') {
				navigate(`/${AdminRoute.AdminNews}/${AdminRoute.AdminNewsList}`)
			}
		}
	}

	useEffect(() => {
		if (newsInfoData) {
			let skipDate = false
			if (newsInfoData?.itemdate === '0000-00-00 00:00:00') {
				skipDate = true
			}
			const transformedData = {
				...newsInfoData,
				itemdate: skipDate ? undefined : newsInfoData?.itemdate,
			}
			methods.reset({ ...transformedData })
		}
	}, [newsInfoData])

	return (
		<>
			<Container $padding='0px 30px 35px 30px'>
				<FormProvider {...methods}>
					<form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
						<MainSection />
						<AdminControllers
							variant='4'
							outLink={`/${AdminRoute.AdminNews}/${AdminRoute.AdminNewsList}`}
							isSent={isSent}
							actionHandler={setAction}
						/>
					</form>
				</FormProvider>
			</Container>
		</>
	)
}
