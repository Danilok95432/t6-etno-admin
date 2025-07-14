import {
	type EventNewIdResponse,
	type EventInfoResponse,
	type EventResponse,
	type EventContacts,
	type EventContent,
	type EventPartnerInfoResponse,
	type EventPartnersResponse,
	type CicleResponse,
	type CicleInfoResponse,
	type EventSubEventsResponse,
	type EventSubEventInfoReponse,
} from 'src/types/events'
import { type FieldValues } from 'react-hook-form'

import { createApi } from '@reduxjs/toolkit/query/react'

import { ReducerPath } from 'src/helpers/consts'
import { baseQueryWithReauth } from 'src/helpers/base-query'

export const eventsApi = createApi({
	reducerPath: ReducerPath.Events,
	tagTypes: [
		'Events',
		'EventInfo',
		'EventPartners',
		'EventContacts',
		'EventContent',
		'EventNews',
		'EventVideo',
		'EventProgram',
		'EventPartner',
		'SubEvent',
		'SubEventInfo',
		'Cicles',
		'CicleInfo',
	],
	baseQuery: baseQueryWithReauth,
	endpoints: (build) => ({
		getAllEvents: build.query<
			EventResponse,
			{
				idObject?: string
				title?: string
				objectTitle?: string
				dateFrom?: string
				dateTo?: string
			}
		>({
			query: ({ idObject = '', title = '', objectTitle = '', dateFrom = '', dateTo = '' }) => ({
				url: `events/list`,
				params: {
					idObject,
					title,
					objectTitle,
					dateFrom,
					dateTo,
				},
			}),
			providesTags: ['Events'],
		}),
		getAllCicles: build.query<CicleResponse, null>({
			query: () => ({
				url: `cicles/list`,
			}),
			providesTags: ['Cicles'],
		}),
		deleteCicleById: build.mutation<null, string>({
			query: (cicleId) => ({
				url: `cicles/delete`,
				method: 'DELETE',
				body: { id: cicleId },
			}),
			invalidatesTags: ['Cicles'],
		}),
		hideCicleById: build.mutation<null, string>({
			query: (cicleId) => ({
				url: `cicles/hide`,
				method: 'POST',
				body: { id: cicleId },
			}),
			invalidatesTags: ['Cicles'],
		}),
		getCicleInfo: build.query<CicleInfoResponse, string>({
			query: (id) => ({
				url: `cicles/edit`,
				params: {
					id,
				},
			}),
			providesTags: ['CicleInfo'],
		}),
		saveCicleInfo: build.mutation<string, FieldValues>({
			query: (FormData) => ({
				url: `cicles/save`,
				method: 'POST',
				body: FormData,
			}),
			invalidatesTags: ['CicleInfo', 'Cicles'],
		}),
		getNewIdCicle: build.query<EventNewIdResponse, null>({
			query: () => ({
				url: `cicles/getnew`,
			}),
			providesTags: ['CicleInfo', 'Cicles'],
		}),
		deleteEventById: build.mutation<null, string>({
			query: (eventId) => ({
				url: `events/delete`,
				method: 'DELETE',
				body: { id: eventId },
			}),
			invalidatesTags: ['Events'],
		}),
		hideEventById: build.mutation<null, string>({
			query: (eventId) => ({
				url: `events/hide`,
				method: 'POST',
				body: { id: eventId },
			}),
			invalidatesTags: ['Events'],
		}),
		getEventInfo: build.query<EventInfoResponse, string>({
			query: (id) => ({
				url: `events/edit`,
				params: {
					id,
				},
			}),
			providesTags: ['EventInfo'],
		}),
		saveEventProfileInfo: build.mutation<string, FieldValues>({
			query: (FormData) => ({
				url: `events/save`,
				method: 'POST',
				body: FormData,
			}),
			invalidatesTags: ['EventInfo', 'Events'],
		}),
		getNewIdEvent: build.query<EventNewIdResponse, null>({
			query: () => ({
				url: `events/getnew`,
			}),
			providesTags: ['EventInfo', 'Events'],
		}),
		getContactsByEventId: build.query<EventContacts, string>({
			query: (id) => ({
				url: `events/edit_contacts`,
				params: {
					id,
				},
			}),
			providesTags: ['Events', 'EventContacts'],
		}),
		saveEventContactInfo: build.mutation<string, FieldValues>({
			query: (FormData) => ({
				url: `events/save_contacts`,
				method: 'POST',
				body: FormData,
			}),
			invalidatesTags: ['EventInfo', 'Events', 'EventContacts'],
		}),
		getContentByEventId: build.query<EventContent, string>({
			query: (id) => ({
				url: `events/edit_content`,
				params: {
					id,
				},
			}),
			providesTags: ['EventInfo', 'Events', 'EventContacts'],
		}),
		saveEventContentInfo: build.mutation<string, FieldValues>({
			query: (FormData) => ({
				url: `events/save_content`,
				method: 'POST',
				body: FormData,
			}),
			invalidatesTags: ['EventInfo', 'Events', 'EventContacts'],
		}),
		getPartnersByEventId: build.query<
			EventPartnersResponse,
			{ idEvent: string | undefined; title?: string; partnerVids?: string; partnerTypes?: string }
		>({
			query: ({ idEvent, title, partnerVids = '', partnerTypes = '' }) => ({
				url: `events/partners`,
				params: {
					id_event: idEvent,
					title,
					partner_vids: partnerVids,
					partner_types: partnerTypes,
				},
			}),
			providesTags: ['Events', 'EventPartners'],
		}),
		deleteEventPartnerById: build.mutation<null, string>({
			query: (partnerId) => ({
				url: `events/delete_partner`,
				method: 'DELETE',
				body: { id: partnerId },
			}),
			invalidatesTags: ['Events', 'EventPartner'],
		}),
		hideEventPartnerById: build.mutation<null, string>({
			query: (partnerId) => ({
				url: `events/hide_partner`,
				method: 'POST',
				body: { id: partnerId },
			}),
			invalidatesTags: ['Events', 'EventPartner'],
		}),
		getNewPartnerIdEvent: build.query<EventNewIdResponse, string>({
			query: (id) => ({
				url: `events/getnew_partner`,
				params: {
					id_event: id,
				},
			}),
			providesTags: ['EventPartner', 'Events'],
		}),
		getEventPartnerInfo: build.query<EventPartnerInfoResponse, string>({
			query: (id) => ({
				url: `events/edit_partner`,
				params: {
					id,
				},
			}),
			providesTags: ['EventPartner', 'Events'],
		}),
		saveEventPartnerInfo: build.mutation<string, FieldValues>({
			query: (FormData) => ({
				url: `events/save_partner`,
				method: 'POST',
				body: FormData,
			}),
			invalidatesTags: ['EventPartner', 'Events'],
		}),
		getSubEventsByEventId: build.query<
			EventSubEventsResponse,
			{ idEvent: string | undefined; title?: string }
		>({
			query: ({ idEvent, title }) => ({
				url: `sub_events/list`,
				params: {
					id_event: idEvent,
					title,
				},
			}),
			providesTags: ['Events', 'SubEvent'],
		}),
		deleteSubEventById: build.mutation<null, string>({
			query: (subEventId) => ({
				url: `sub_events/delete`,
				method: 'DELETE',
				body: { id: subEventId },
			}),
			invalidatesTags: ['Events', 'SubEvent'],
		}),
		hideSubEventById: build.mutation<null, string>({
			query: (subEventId) => ({
				url: `sub_events/hide`,
				method: 'POST',
				body: { id: subEventId },
			}),
			invalidatesTags: ['Events', 'SubEvent'],
		}),
		getNewSubEventId: build.query<EventNewIdResponse, string>({
			query: (id) => ({
				url: `sub_events/getnew`,
				params: {
					id_event: id,
				},
			}),
			providesTags: ['SubEvent', 'Events'],
		}),
		getSubEventInfo: build.query<EventSubEventInfoReponse, string>({
			query: (id) => ({
				url: `sub_events/edit`,
				params: {
					id,
				},
			}),
			providesTags: ['SubEvent', 'SubEventInfo'],
		}),
		saveSubEventInfo: build.mutation<string, FieldValues>({
			query: (FormData) => ({
				url: `sub_events/save`,
				method: 'POST',
				body: FormData,
			}),
			invalidatesTags: ['SubEvent', 'SubEventInfo'],
		}),
	}),
})

export const {
	useGetAllEventsQuery,
	useGetAllCiclesQuery,
	useGetCicleInfoQuery,
	useHideCicleByIdMutation,
	useSaveCicleInfoMutation,
	useDeleteCicleByIdMutation,
	useGetNewIdCicleQuery,
	useDeleteEventByIdMutation,
	useHideEventByIdMutation,
	useGetEventInfoQuery,
	useSaveEventProfileInfoMutation,
	useGetNewIdEventQuery,
	useGetContactsByEventIdQuery,
	useSaveEventContactInfoMutation,
	useGetContentByEventIdQuery,
	useSaveEventContentInfoMutation,
	useGetPartnersByEventIdQuery,
	useDeleteEventPartnerByIdMutation,
	useHideEventPartnerByIdMutation,
	useGetNewPartnerIdEventQuery,
	useGetEventPartnerInfoQuery,
	useSaveEventPartnerInfoMutation,
	useGetNewSubEventIdQuery,
	useGetSubEventInfoQuery,
	useDeleteSubEventByIdMutation,
	useHideSubEventByIdMutation,
	useSaveSubEventInfoMutation,
	useGetSubEventsByEventIdQuery,
} = eventsApi
