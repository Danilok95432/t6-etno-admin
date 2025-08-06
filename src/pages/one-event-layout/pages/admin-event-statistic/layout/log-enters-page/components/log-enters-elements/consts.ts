import { type FilterTableInput } from 'src/types/global'

export const TicketsFiltrationInputs: FilterTableInput[] = [
	{
		name: 'title',
		placeholder: 'искать по номеру телефона',
		type: 'text',
	},
	{
		name: 'surname',
		placeholder: 'искать по фамилии посетителя...',
		type: 'text',
	},
	{
		name: 'turniket',
		placeholder: 'выбрать статус попытки',
		type: 'select',
		options: [{ label: 'Не выбран', value: '0' }],
	},
	{
		name: 'turniket',
		placeholder: 'выбрать турникет или инспектора',
		type: 'select',
		options: [{ label: 'Не выбран', value: '0' }],
	},
]
