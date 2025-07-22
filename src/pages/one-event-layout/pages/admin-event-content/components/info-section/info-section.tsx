import { type FC } from 'react'
import { AdminSection } from 'src/components/admin-section/admin-section'
import { type ImageItemWithText } from 'src/types/photos'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { QuillEditor } from 'src/components/quill-editor/quill-editor'
import { ReactDropzone } from 'src/components/react-dropzone/react-dropzone'
import styles from './index.module.scss'
import { ControlledCheckbox } from 'src/components/controlled-checkbox/controlled-checkbox'
import { GridRow } from 'src/components/grid-row/grid-row'

type InfoSectionProps = {
	photo?: ImageItemWithText[]
}

export const InfoSection: FC<InfoSectionProps> = ({ photo = [] }) => {
	return (
		<AdminSection titleText='Инфоблок'>
			<ControlledInput name='title' label='Заголовок' margin='0 0 20px 0' maxWidth='1140px' />
			<QuillEditor name='full' label='Текст' $heightEditor='250px' $maxWidth='1140px' />
			<ReactDropzone
				label='Основное изображение'
				name='photo'
				prompt='PNG, JPG, JPEG. 1000 х1000px, не более 3 Мб'
				accept={{ 'image/png': ['.png'], 'image/jpeg': ['.jpeg'] }}
				margin='20px 0 20px 0'
				previewVariant='sm-img'
				imgtype='news'
				fileImages={photo}
			/>
			<div className={styles.inputWrapper}>
				<ControlledCheckbox
					name='use_reg_participants'
					label='Включить регистрацию участников'
					type='checkbox'
					className={styles.checkbox}
				/>
			</div>
			<div className={styles.inputWrapper}>
				<ControlledCheckbox
					name='use_reg_guests'
					label='Включить регистрацию гостей'
					type='checkbox'
					className={styles.checkbox}
				/>
			</div>
			<GridRow className={styles.linkRowInputs}>
				<ControlledInput name={`linkTitle`} placeholder='Текст ссылки' maxWidth='1140px' />
				<ControlledInput name={`linkUrl`} placeholder='Адрес ссылки' />
			</GridRow>
		</AdminSection>
	)
}
