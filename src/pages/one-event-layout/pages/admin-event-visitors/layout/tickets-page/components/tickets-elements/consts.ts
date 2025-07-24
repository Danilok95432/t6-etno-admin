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
		name: 'status',
		placeholder: 'способ покупки',
		type: 'select',
	},
	{
		name: 'turniket',
		placeholder: 'групповой',
		type: 'select',
	},
	{
		name: 'turniket',
		placeholder: 'тип билета',
		type: 'select',
	},
]
