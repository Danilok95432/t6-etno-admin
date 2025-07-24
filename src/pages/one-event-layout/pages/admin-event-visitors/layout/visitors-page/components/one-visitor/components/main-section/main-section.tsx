import { type SelOption } from 'src/types/select'
import { type FC } from 'react'
import { type ImageItemWithText } from 'src/types/photos'

import { AdminSection } from 'src/components/admin-section/admin-section'
import { ControlledDateInput } from 'src/components/controlled-date-input/controlled-date-input'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { GridRow } from 'src/components/grid-row/grid-row'

import adminStyles from 'src/routes/admin-layout/index.module.scss'
import styles from './index.module.scss'
import { ControlledSelect } from 'src/components/controlled-select/controlled-select'
import { ControlledCheckbox } from 'src/components/controlled-checkbox/controlled-checkbox'
import { InfoIconSvg } from 'src/UI/icons/infoIcon'
import { Tooltip } from 'src/components/tooltip/Tooltip'
import { ReactDropzone } from 'src/components/react-dropzone/react-dropzone'
import cn from 'classnames'

type MainSectionProps = {
	galleryOptions?: SelOption[]
	photo?: ImageItemWithText[]
}

export const MainSection: FC<MainSectionProps> = ({ photo, galleryOptions = [] }) => {
	return (
		<AdminSection className={styles.mainSection} isBlock={false}>
			<div className={styles.inputWrapper}>
				<ControlledInput name='surname' label='Фамилия *' placeholder='Фамилия' />

				<Tooltip text='Подсказка' position='top' wrapperClassName={styles.tooltip}>
					<InfoIconSvg />
				</Tooltip>
			</div>
			<div className={styles.inputWrapper}>
				<ControlledInput name='name' label='Имя *' placeholder='Имя' />

				<Tooltip text='Подсказка' position='top' wrapperClassName={styles.tooltip}>
					<InfoIconSvg />
				</Tooltip>
			</div>
			<div className={styles.inputWrapper}>
				<ControlledInput name='fathname' label='Отчество' placeholder='Отчество' />

				<Tooltip text='Подсказка' position='top' wrapperClassName={styles.tooltip}>
					<InfoIconSvg />
				</Tooltip>
			</div>
			<div className={styles.inputWrapper}>
				<ControlledInput
					name='nickname'
					label='Прозвище / позывной'
					placeholder='Прозвище / позывной'
				/>

				<Tooltip text='Подсказка' position='top' wrapperClassName={styles.tooltip}>
					<InfoIconSvg />
				</Tooltip>
			</div>
			<GridRow $template='auto/200px 1fr' $width='auto' $alignItems='center'>
				<ControlledDateInput
					className={cn(adminStyles.adminDateTimeInput, styles.dateInput)}
					label='Дата рождения *'
					name='birthdate'
					placeholder='гггг-мм-дд'
					dateFormat='yyyy-MM-dd'
				/>
				<ControlledCheckbox
					name='hide_birthdate'
					label='Скрывать из публичного доступа возраст и дату рождения'
					type='checkbox'
					className={styles.checkbox}
				/>
			</GridRow>
			<ReactDropzone
				label='Аватар *'
				name='photo'
				prompt='PNG, JPG, JPEG. 1000 х1000px, не более 3 Мб'
				accept={{ 'image/png': ['.png'], 'image/jpeg': ['.jpeg'] }}
				margin='0 0 20px 0'
				previewVariant='sm-img'
				imgtype='visitor_photo'
				fileImages={photo}
			/>
			<div className={styles.inputWrapperShort}>
				<ControlledInput name='website' label='Интернет-сайт' placeholder='www.example.com' />
				<Tooltip text='Подсказка' position='top' wrapperClassName={styles.tooltip}>
					<InfoIconSvg />
				</Tooltip>
			</div>
			<div className={styles.inputWrapperShort}>
				<ControlledInput name='email' label='Контактный e-mail' placeholder='example@example.com' />
				<Tooltip text='Подсказка' position='top' wrapperClassName={styles.tooltip}>
					<InfoIconSvg />
				</Tooltip>
			</div>
			<div className={styles.inputWrapperShort}>
				<ControlledInput
					name='telegram'
					label='Имя в Telegram (@TG)'
					placeholder='@my_unique_name'
				/>
				<Tooltip text='Подсказка' position='top' wrapperClassName={styles.tooltip}>
					<InfoIconSvg />
				</Tooltip>
			</div>
			<GridRow $template='auto/200px 1fr' $width='auto'>
				<ControlledInput name='phone' label='Номер телефона' placeholder='+7 (999) 999-99-99' />
				<ControlledCheckbox
					name='hide_phone'
					label='Скрыть мой номер из публичного доступа'
					type='checkbox'
					className={styles.checkbox}
				/>
			</GridRow>
			<GridRow $template='auto/200px 1fr' $width='auto'>
				<ControlledSelect
					name='region'
					label='Регион и город *'
					selectOptions={[{ label: '', value: '' }]}
				/>
				<ControlledInput name='city' placeholder='Название населенного пункта' />
			</GridRow>
			<div className={styles.inputWrapper}>
				<ControlledInput
					name='website'
					label='Несколько слов о себе'
					placeholder='Начните писать текст...'
					isTextarea
					height='100px'
				/>
				<Tooltip text='Подсказка' position='top' wrapperClassName={styles.tooltip}>
					<InfoIconSvg />
				</Tooltip>
			</div>
		</AdminSection>
	)
}
