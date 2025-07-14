import { type SelOption } from 'src/types/select'
import * as yup from 'yup'

export type ProgramInputs = {
	hidden?: boolean
	title: string
	trebovania?: string
	reglament?: string
	url?: string
	use_end_time?: boolean
	use_group?: boolean
	use_reg?: boolean
	begin_time: string
	end_time?: string
	short: string
	address: string
	email: string
	phone: string
	telegram: string
	rules: string
	itemdate: string
	place: string
	organizators_list: SelOption[] | string
	vids_list: SelOption[] | string
}

export const programSchema = yup.object({
	title: yup.string().required('Введите название подсобытия'),
	short: yup.string().required('Введите описание'),
	rules: yup.string().required('Введите краткое описание правил'),
	address: yup.string().required('Введите адрес'),
	phone: yup.string().required('Введите телефон'),
	telegram: yup.string().required('Введите телеграм'),
	email: yup.string().required('Введите почту'),
	place: yup.string().required('Введите локацию'),
	itemdate: yup
		.mixed<Date | string>()
		.transform((value, originalValue) => {
			if (typeof originalValue === 'string') {
				return new Date(originalValue)
			}
			return value
		})
		.required('Введите дату'),
	begin_time: yup
		.mixed<Date | string>()
		.transform((value, originalValue) => {
			if (typeof originalValue === 'string') {
				return new Date(originalValue)
			}
			return value
		})
		.required('Время начала обязательно'),
	organizators_list: yup
		.mixed<string | SelOption[]>()
		.test('is-type-selected', 'Выберите организатора', (value) => {
			if (typeof value === 'string') {
				return true
			} else if (Array.isArray(value) && value.length > 0) {
				const firstElement = value[0]
				if (
					typeof firstElement === 'object' &&
					firstElement !== null &&
					'label' in firstElement &&
					'value' in firstElement &&
					firstElement.label === 'Организатор не выбран'
				) {
					return false
				} else {
					return true
				}
			} else {
				return false
			}
		})
		.required('Выберите организатора'),
	vids_list: yup
		.mixed<string | SelOption[]>()
		.test('is-type-selected', 'Выберите хотя бы один вид', (value) => {
			if (typeof value === 'string') {
				return true
			} else if (Array.isArray(value) && value.length > 0) {
				const firstElement = value[0]
				if (
					typeof firstElement === 'object' &&
					firstElement !== null &&
					'label' in firstElement &&
					'value' in firstElement &&
					firstElement.label === 'Вид не выбран'
				) {
					return false
				} else {
					return true
				}
			} else {
				return false
			}
		})
		.required('Выберите хотя бы один вид'),
})
