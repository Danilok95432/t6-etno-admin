import { type FilterTableInput } from 'src/types/global'

export const TicketsFiltrationInputs: FilterTableInput[] = [
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
		name: 'turniket',
		placeholder: 'групповой',
		type: 'select',
		options: [{ label: 'Не выбран', value: '0' }],
	},
	{
		name: 'region',
		placeholder: 'искать по региону',
		type: 'text',
	},
]
