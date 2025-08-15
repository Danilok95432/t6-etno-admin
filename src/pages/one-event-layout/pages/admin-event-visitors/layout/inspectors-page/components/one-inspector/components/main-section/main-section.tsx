import { type SelOption } from 'src/types/select'
import { type FC } from 'react'
import { type ImageItemWithText } from 'src/types/photos'

import { AdminSection } from 'src/components/admin-section/admin-section'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { GridRow } from 'src/components/grid-row/grid-row'

import styles from './index.module.scss'
import { ControlledSelect } from 'src/components/controlled-select/controlled-select'
import { FormInput } from 'src/UI/FormInput/FormInput'
import { ControlledMultipleSelect } from 'src/components/controlled-multiple-select/controlled-multiple-select'
import cn from 'classnames'

type MainSectionProps = {
	galleryOptions?: SelOption[]
	photo?: ImageItemWithText[]
}

export const MainSection: FC<MainSectionProps> = ({ photo, galleryOptions = [] }) => {
	return (
		<AdminSection className={styles.mainSection} isBlock={false}>
			<h2 className={styles.title}>Инспектор</h2>
			<div className={cn(styles.inputWrapper, styles.formInputWrapper)}>
				<FormInput
					name='name'
					label='ФИО инспектора *'
					placeholder='ФИО'
					is_select
					className={styles.noMargin}
				/>
				<span>Начните вводить фамилию и выберите из найденных вариантов.</span>
			</div>
			<div className={styles.inputWrapper}>
				<FormInput
					name='phone'
					label='Номер телефона *'
					placeholder='Номер телефона'
					isPhone
					className={styles.noMargin}
				/>
			</div>
			<div className={styles.inputWrapper}>
				<ControlledInput
					name='comment'
					label='Описание или комментарий'
					placeholder='Описание или комментарий'
				/>
			</div>
			<div className={styles.inputWrapper}>
				<ControlledMultipleSelect
					name='points'
					label='Пропускные зоны'
					selectOptions={[{ label: '', value: '', selected: false }]}
				/>
			</div>
			<div className={styles.inputWrapper}>
				<ControlledSelect
					name='service'
					label='Точка сервиса'
					selectOptions={[{ label: 'Выберите из списка', value: '0' }]}
				/>
			</div>
			<GridRow $template='auto/1fr 1fr' $width='auto' $alignItems='start' $margin='0 0 20px 0'>
				<ControlledInput name='login' label='Логин инспектора' placeholder='Логин инспектора' />
				<div className={styles.inputWrapper}>
					<ControlledInput name='password' label='Пароль' type='password' placeholder='****' />
					<span>Вводите для изменения!</span>
				</div>
			</GridRow>
		</AdminSection>
	)
}
