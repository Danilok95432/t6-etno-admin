import { type FilterTableInput } from 'src/types/global'

export const PassFiltrationInputs: FilterTableInput[] = [
	{
		name: 'title',
		placeholder: 'искать по номеру телефона',
		type: 'text',
	},
	{
		name: 'surname',
		placeholder: 'искать по фамилии посетителя',
		type: 'text',
	},
	{
		name: 'status',
		placeholder: 'выбрать статус попытки',
		type: 'select',
	},
	{
		name: 'turniket',
		placeholder: 'выбрать турникет или инспектора',
		type: 'select',
	},
]
