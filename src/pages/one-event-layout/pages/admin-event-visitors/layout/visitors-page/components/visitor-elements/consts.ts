import { type FilterTableInput } from 'src/types/global'

export const VisitorFiltrationInputs: FilterTableInput[] = [
	{
		name: 'title',
		placeholder: 'искать по фамилии и имени',
		type: 'text',
	},
	{
		name: 'status',
		placeholder: 'выбрать роль',
		type: 'select',
	},
	{
		name: 'turniket',
		placeholder: 'выбрать статус',
		type: 'select',
	},
	{
		name: 'surname',
		placeholder: 'искать по названию группы',
		type: 'text',
	},
	{
		name: 'turniket',
		placeholder: 'искать по номеру телефона',
		type: 'text',
	},
]
