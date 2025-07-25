import { type FilterTableInput } from 'src/types/global'

export const GroupsFiltrationInputs: FilterTableInput[] = [
	{
		name: 'title',
		placeholder: 'искать по номеру телефона',
		type: 'text',
	},
	{
		name: 'surname',
		placeholder: 'искать по фамилии покупателя',
		type: 'text',
	},
	{
		name: 'status',
		placeholder: 'способ покупки',
		type: 'select',
		options: [{ label: 'Не выбран', value: '0' }],
	},
	{
		name: 'turniket',
		placeholder: 'групповой',
		type: 'select',
		options: [{ label: 'Не выбран', value: '0' }],
	},
	{
		name: 'turniket',
		placeholder: 'тип билета',
		type: 'select',
		options: [{ label: 'Не выбран', value: '0' }],
	},
]
