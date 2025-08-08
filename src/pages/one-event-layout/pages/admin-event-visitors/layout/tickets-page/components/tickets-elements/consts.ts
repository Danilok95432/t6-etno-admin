import { type FilterTableInput } from 'src/types/global'

export const TicketsFiltrationInputs: FilterTableInput[] = [
	{
		name: 'telphone',
		placeholder: 'искать по номеру телефона',
		type: 'text',
	},
	{
		name: 'surname',
		placeholder: 'искать по фамилии покупателя',
		type: 'text',
	},
	{
		name: 'use_group',
		placeholder: 'выберите тип',
		type: 'select',
		options: [
			{ label: 'Одиночный', value: '0' },
			{ label: 'Групповой', value: '1' },
		],
	},
	{
		name: 'region',
		placeholder: 'искать по региону',
		type: 'text',
	},
]
