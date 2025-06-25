import { Helmet } from 'react-helmet-async'
import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { AdminContent } from 'src/components/admin-content/admin-content'

import adminStyles from 'src/routes/admin-layout/index.module.scss'
import styles from './index.module.scss'
import { AdminRoute } from 'src/routes/admin-routes/consts'
import { yupResolver } from '@hookform/resolvers/yup'
// import { useEffect } from 'react'
// import { useGetCultureInfoQuery } from 'src/store/cultures/cultures.api'
import { FlexRow } from 'src/components/flex-row/flex-row'
import { QuillEditor } from 'src/components/quill-editor/quill-editor'
import { AdminButton } from 'src/UI/AdminButton/AdminButton'
import { useIsSent } from 'src/hooks/sent-mark/sent-mark'
import { funRulesSchema, type FunRulesInputs } from './schema'

export const FunRules = () => {
	// const { id = '0' } = useParams()
	// const { data: cultureInfoData } = useGetCultureInfoQuery(id)
	const methods = useForm<FunRulesInputs>({
		mode: 'onBlur',
		resolver: yupResolver(funRulesSchema),
		defaultValues: {
			rules: '',
		},
	})

	const { isSent, markAsSent } = useIsSent(methods.control)

	const onSubmit: SubmitHandler<FunRulesInputs> = async (data) => {
		try {
			console.log(data)
			markAsSent(true)
		} catch (e) {
			console.error(e)
		}
	}
	/*
	useEffect(() => {
		if (cultureInfoData) {
			methods.reset({ ...cultureInfoData })
		}
	}, [cultureInfoData])
	*/

	return (
		<>
			<Helmet>
				<title>Информация</title>
			</Helmet>
			<AdminContent className={styles.cultureInfoPage}>
				<Link
					to={`/${AdminRoute.AdminAbout}/${AdminRoute.AdminAboutEtnosport}`}
					className={adminStyles.adminReturnLink}
				>
					Возврат к списку элементов
				</Link>
				<h3>Правила забавы</h3>
				<FormProvider {...methods}>
					<form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
						<QuillEditor
							name='bottomDesc'
							label='Первый текстовый блок'
							$heightEditor='450px'
							$maxWidth='1140px'
						/>
						<FlexRow $margin='40px 0 45px 0' $gap='15px'>
							<AdminButton as='button' type='submit' $variant={isSent ? 'sent' : 'primary'}>
								Сохранить
							</AdminButton>
							<AdminButton as='link' to='/' $variant='light'>
								Отменить
							</AdminButton>
						</FlexRow>
					</form>
				</FormProvider>
				<Link
					to={`/${AdminRoute.AdminAbout}/${AdminRoute.AdminAboutEtnosport}`}
					className={adminStyles.adminReturnLink}
				>
					Возврат к списку элементов
				</Link>
			</AdminContent>
		</>
	)
}
