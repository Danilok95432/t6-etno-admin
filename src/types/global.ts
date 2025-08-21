import { type SelOption } from './select'

export type RelatedLink = {
	id: string
	title: string
}

export type RouteBlock = {
	routeTitle: string
	routeDesc: string
	routeScript: string
}

export type FilterTableInput = {
	name: string
	placeholder: string
	type: 'text' | 'date' | 'select' | 'special-select'
	options?: SelOption[]
}

export type ResponseError = {
	status: number
	data: {
		status: string
		errortext: string
	}
}
