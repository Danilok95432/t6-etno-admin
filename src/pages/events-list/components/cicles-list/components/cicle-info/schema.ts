import { type ImageItemWithText } from 'src/types/photos'
import { type SelOption } from 'src/types/select'
import * as yup from 'yup'

export type CicleInfoInputs = {
	cicle_name: string
	cicle_dates?: string
	cicle_short?: string
	age?: string
	url?: string
	email: string
	telegram: string
	phone: string
	place: string
	anonstext: string
	fulltext: string
	id_cicle_type: string | SelOption[]
	hidden?: boolean
	photo?: ImageItemWithText[]
	photos?: ImageItemWithText[]
}

export const cicleInfoSchema = yup.object().shape({
	cicle_name: yup.string().required('Введите название цикла'),
	email: yup.string().required('Введите email'),
	phone: yup.string().required('Введите телефон'),
	telegram: yup.string().required('Введите телеграм'),
	anonstext: yup.string().required('Введите текст анонса'),
	fulltext: yup.string().required('Введите текст описания'),
	place: yup.string().required('Введите адрес'),
	id_cicle_type: yup
		.mixed<string | SelOption[]>()
		.test('is-type-selected', 'Выберите хотя бы один тип', (value) => {
			if (typeof value === 'string') {
				return true
			} else if (Array.isArray(value) && value.length > 0) {
				const firstElement = value[0]
				if (
					typeof firstElement === 'object' &&
					firstElement !== null &&
					'label' in firstElement &&
					'value' in firstElement &&
					firstElement.label === 'Тип не выбран'
				) {
					return false
				} else {
					return true
				}
			} else {
				return false
			}
		})
		.required('Выберите хотя бы один тип'),
})
