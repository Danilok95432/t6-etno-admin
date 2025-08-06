import { type FilterTableInput } from 'src/types/global'

export const BraceletFiltrationInputs: FilterTableInput[] = [
	{
		name: 'title',
		placeholder: 'искать по номеру телефона...',
		type: 'text',
	},
	{
		name: 'turniket',
		placeholder: 'выбрать роль',
		type: 'select',
		options: [{ label: 'Не выбран', value: '0' }],
	},
	{
		name: 'turniket',
		placeholder: 'выбрать статус',
		type: 'select',
		options: [{ label: 'Не выбран', value: '0' }],
	},
]
