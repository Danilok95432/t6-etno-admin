import { type FilterTableInput } from 'src/types/global'

export const RequestsVisitorFiltrationInputs: FilterTableInput[] = [
	{
		name: 'surname',
		placeholder: 'искать по фамилии и имени посетителя...',
		type: 'text',
	},
	{
		name: 'group',
		placeholder: 'искать по названию группы...',
		type: 'text',
	},
	{
		name: 'status',
		placeholder: 'группа?',
		type: 'select',
		options: [{ label: 'Не выбран', value: '0' }],
	},
	{
		name: 'turniket',
		placeholder: 'тип группы',
		type: 'select',
		options: [{ label: 'Не выбран', value: '0' }],
	},
	{
		name: 'region',
		placeholder: 'искать по региону...',
		type: 'text',
	},
]
