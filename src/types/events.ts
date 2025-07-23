import { type FileItem } from './files'
import { type PartnerCheckBoxesInfo } from './partners'
import { type ImageItemWithText } from './photos'
import { type SelOption } from './select'

export type EventItem = {
	id: string
	hidden: boolean
	title: string
	date: [Date, Date] | string
	object_title: string
	event_type_name: string
	event_part_name: string
	event_level_name: string
}

export type CicleItem = {
	id: string
	cicle_name: string
	cicle_dates: string
	cicle_short: string
	cicle_type_name: string
	cicle_actual_name: string
	age: string
	url: string
	email: string
	telegram: string
	phone: string
	place: string
	hidden: boolean
}

export type EventPartners = {
	id: string
	id_partner: string
	title: string
	partner_types: string[]
	partner_vids: string[]
	partner_number: string
	hidden: boolean
}

export type EventSubEvent = {
	id: string
	hidden: boolean
	title: string
	type: string
	use_end_time: string
	use_group: string
	use_reg: string
	vid_name: string
	registration: string
	date: string
	begin_time: string
	end_time: string
	place: string
}

export type EventSubEventInfoReponse = {
	hidden: boolean
	title: string
	trebovania: string
	reglament: string
	url: string
	use_end_time: boolean
	use_group: boolean
	use_reg: boolean
	begin_time: string
	end_time: string
	short: string
	address: string
	email: string
	phone: string
	telegram: string
	rules: string
	itemdate: string
	organizators_list: SelOption[]
	vids_list: SelOption[]
	photo: ImageItemWithText[]
}

export type EventSubEventsResponse = {
	sub_events: EventSubEvent[]
}

export type EventPartnersResponse = {
	partners: EventPartners[]
}

export type EventResponse = {
	events: EventItem[]
}

export type CicleResponse = {
	cicles: CicleItem[]
}

export type EventNewIdResponse = {
	status: string
	id: string
}

export type EventInfoResponse = {
	title: string
	objects_list?: SelOption[]
	event_types_list: SelOption[]
	event_levels_list: SelOption[]
	brands_list: SelOption[]
	tags?: string
	date_from: string
	time_from: string
	date_to: string
	time_to: string
	description: string
	fullinfo: string
	conditions: string
	raspisanie: string
	age_list: SelOption[]
	locations_list?: SelOption[]
	main?: boolean
	hidden?: boolean
}

export type CicleInfoResponse = {
	cicle_name: string
	cicle_dates: string
	cicle_short: string
	age: string
	url: string
	email: string
	telegram: string
	phone: string
	place: string
	anonstext: string
	fulltext: string
	id_cicle_type: SelOption[]
	id_cicle_regular: SelOption[]
	id_cicle_actual: SelOption[]
	id_age_limit: SelOption[]
	organizators_list: SelOption[]
	hidden: boolean
	photo: ImageItemWithText[]
	photos: ImageItemWithText[]
	use_gallery: boolean
	use_video: boolean
	use_news: boolean
}

export type pathwaysEvent = {
	title: string
	desc: string
	location: string
}

export type placementsEvent = {
	title: string
	desc: string
	location: string
}

export type linksEvent = {
	title: string
	link: string
	desc: string
	date: string
}

export type InfoBlockContent = {
	title: string
	short: string
	photo: ImageItemWithText[]
	reg_participants: boolean
	reg_guests: boolean
	link_url: string
	link_text: string
	hidden: boolean
	id: string
}

export type EventContacts = {
	website: string
	contact_telphone?: string
	contact_tg?: string
	contact_email?: string
	hide_telphone?: boolean
	hide_tg?: boolean
	hide_email?: boolean
	pathways?: pathwaysEvent[]
	hide_pathways?: boolean
}

export type EventRules = {
	id_event: string
	rule_name: string
	rule_text: string
	politic_name: string
	politic_text: string
}

export type EventContent = {
	placements: placementsEvent[]
	linksBlock_title: string
	hide_placements?: boolean
	hide_gallery?: boolean
	hide_documents?: boolean
	links: linksEvent[]
	hide_links?: boolean
	photo?: ImageItemWithText[]
	photos?: ImageItemWithText[]
	promo?: ImageItemWithText[]
	documents?: FileItem[]
	infoblock: InfoBlockContent
}

export type EventPartnerInfoResponse = {
	partners_list: SelOption[]
	partner_types: PartnerCheckBoxesInfo[]
}

export type EventProgramResponse = {
	program: EventProgram[]
}

export type EventProgram = {
	title: string
	place?: string
	itemdate: Date | string
	begin_time: Date | string
	end_time?: Date | string
}
