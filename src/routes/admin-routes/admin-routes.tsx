import React, { type FC } from 'react'
import { Route, Routes } from 'react-router-dom'

import { AdminRoute } from 'src/routes/admin-routes/consts'
import { AdminLayout } from 'src/routes/admin-layout/admin-layout'

import { AdminNewsLayout } from 'src/pages/admin-news/admin-news-layout'
import { NewsList } from 'src/pages/admin-news/components/news/components/news-list/news-list'
import { OneNews } from 'src/pages/admin-news/components/news/components/one-news/one-news'
import { NewsLayout } from 'src/pages/admin-news/components/news/news-layout'
import { VideosLayout } from 'src/pages/admin-news/components/videos/videos-layout'
import { VideosList } from 'src/pages/admin-news/components/videos/components/videos-list/videos-list'
import { OneVideo } from 'src/pages/admin-news/components/videos/components/one-video/one-video'
import { RequestsLayout } from 'src/pages/admin-news/components/requests/requests-layout'
import { RequestsList } from 'src/pages/admin-news/components/requests/components/requests-list/requests-list'
import { OneRequest } from 'src/pages/admin-news/components/requests/components/one-request/one-request'
import { OpenRequest } from 'src/pages/admin-news/components/requests/components/open-request/open-request'

import { EventsList } from 'src/pages/events-list/components/events-list/events-list'
import { OneEventLayout } from 'src/pages/one-event-layout/one-event-layout'
import { AdminEventProfile } from 'src/pages/one-event-layout/pages/admin-event-profile/admin-event-profile'
import { AdminEventContacts } from 'src/pages/one-event-layout/pages/admin-event-contacts/admin-event-contacts'
import { AdminEventContent } from 'src/pages/one-event-layout/pages/admin-event-content/admin-event-content'
import { AdminEventPartnersLayout } from 'src/pages/one-event-layout/pages/admin-event-partners/admin-event-partners-layout'
import { AdminEventNews } from 'src/pages/one-event-layout/pages/admin-event-news/admin-event-news'
import { AdminEventVideos } from 'src/pages/one-event-layout/pages/admin-event-videos/admin-event-videos'
import { AdminEventHistory } from 'src/pages/one-event-layout/pages/admin-event-history/admin-event-history'

import { CommunityLayout } from 'src/pages/community-layout/community-layout'
import { AdminCommunityAbout } from 'src/pages/community-layout/pages/admin-community-about/admin-community-about'
import { AdminCommunityGames } from 'src/pages/community-layout/pages/admin-community-games/admin-community-games'

import { EtnosportElementLayout } from 'src/pages/culture-element-layout/etnosport-element-layout'
import { EtnosportInfo } from 'src/pages/culture-element-layout/pages/etnosport-info/etnosport-info'
import { EtnosportRules } from 'src/pages/culture-element-layout/pages/etnosport-rules/etnosport-rules'

import { AdminObjects } from 'src/pages/admin-objects/admin-objects'
import { AdminPartnersLayout } from 'src/pages/admin-partners-layout/admin-partners-layout'
import { ObjectElementLayout } from 'src/pages/object-element-layout/object-element-layout'
import { ObjectInfo } from 'src/pages/object-element-layout/pages/object-info/object-info'
import { ObjectNews } from 'src/pages/object-element-layout/pages/object-news/object-news'
import { ObjectHistory } from 'src/pages/object-element-layout/pages/object-history/object-history'
import { ObjectEvents } from 'src/pages/object-element-layout/pages/object-events/object-events'
import { ObjectGallery } from 'src/pages/object-element-layout/pages/object-gallery/object-gallery'
import { ObjectLocation } from 'src/pages/object-element-layout/pages/object-location/object-location'

import { AdminSupport } from 'src/pages/admin-support/admin-support'
import { AdminSettings } from 'src/pages/admin-settings/admin-settings'
import { PartnerElements } from 'src/pages/one-event-layout/pages/admin-event-partners/components/partner-elements/partner-elements'
import { OnePartner } from 'src/pages/one-event-layout/pages/admin-event-partners/components/one-partner/one-partner'
import { Partner } from 'src/pages/admin-partners-layout/components/partner/partner'
import { PartnersElements } from 'src/pages/admin-partners-layout/components/partners-elements/partners-elements'
import { AdminQuestionsLayout } from 'src/pages/admin-questions/admin-questions-layout'
import { QuestionsElements } from 'src/pages/admin-questions/components/questions-elements/questions-elements'
import { Question } from 'src/pages/admin-questions/components/question/question'
import { FunRules } from 'src/pages/game-element-layout/pages/fun-rules/fun-rules'
import { FunInfo } from 'src/pages/game-element-layout/pages/fun-info/fun-info'
import { FunElementLayout } from 'src/pages/game-element-layout/fun-element-layout'
import { ObjectVideos } from 'src/pages/object-element-layout/pages/object-videos/object-videos'
import { AdminCommunityCulture } from 'src/pages/community-layout/pages/admin-community-culture/admin-community-culture'
import { AdminEventsLayout } from 'src/pages/events-list/admin-events-layout'
import { CiclesList } from 'src/pages/events-list/components/cicles-list/cicles-list'
import { CicleInfo } from 'src/pages/events-list/components/cicles-list/components/cicle-info/cicle-info'
import { CiclesTable } from 'src/pages/events-list/components/cicles-list/components/cicle-table/cicles-table'
import { AdminEventProgramsLayout } from 'src/pages/one-event-layout/pages/admin-event-program/admin-event-programs-layout'
import { ProgramElements } from 'src/pages/one-event-layout/pages/admin-event-program/components/program-elements/program-elements'
import { OneProgram } from 'src/pages/one-event-layout/pages/admin-event-program/components/one-program/one-program'
import { AdminEventRules } from 'src/pages/one-event-layout/pages/admin-event-rules/admin-event-rules'
import { VisitorsEventLayout } from 'src/pages/one-event-layout/pages/admin-event-visitors/visitors-event-layout'
import { TicketsPage } from 'src/pages/one-event-layout/pages/admin-event-visitors/layout/tickets-page/tickets-page'
import { TicketsElements } from 'src/pages/one-event-layout/pages/admin-event-visitors/layout/tickets-page/components/tickets-elements/tickets-elements'
import { OneTicket } from 'src/pages/one-event-layout/pages/admin-event-visitors/layout/tickets-page/components/one-ticket/one-ticket'
import { VisitorPage } from 'src/pages/one-event-layout/pages/admin-event-visitors/layout/visitors-page/visitors-page'
import { VisitorElements } from 'src/pages/one-event-layout/pages/admin-event-visitors/layout/visitors-page/components/visitor-elements/visitor-elements'
import { OneVisitor } from 'src/pages/one-event-layout/pages/admin-event-visitors/layout/visitors-page/components/one-visitor/one-visitor'
import { GroupPage } from 'src/pages/one-event-layout/pages/admin-event-visitors/layout/group-page/group-page'
import { PassPage } from 'src/pages/one-event-layout/pages/admin-event-visitors/layout/pass-page/pass-page'
import { PassElements } from 'src/pages/one-event-layout/pages/admin-event-visitors/layout/pass-page/components/pass-elements/pass-elements'
import { GroupElements } from 'src/pages/one-event-layout/pages/admin-event-visitors/layout/group-page/components/group-elements/group-elements'
import { OneGroup } from 'src/pages/one-event-layout/pages/admin-event-visitors/layout/group-page/components/one-group/one-group'
import { OneParticipant } from 'src/pages/one-event-layout/pages/admin-event-visitors/layout/participants-page/components/one-visitor/one-participant'
import { ParticipantElements } from 'src/pages/one-event-layout/pages/admin-event-visitors/layout/participants-page/components/participant-elements/participant-elements'

export const AdminRoutes: FC = () => {
	return (
		<Routes>
			<Route path='/' element={<AdminLayout />}>
				<Route path={AdminRoute.AdminNews} element={<AdminNewsLayout />}>
					<Route path={AdminRoute.AdminNewsList} element={<NewsLayout />}>
						<Route index element={<NewsList />} />
						<Route path=':id' element={<OneNews />} />
					</Route>
					<Route path={AdminRoute.AdminVideosList} element={<VideosLayout />}>
						<Route index element={<VideosList />} />
						<Route path=':id' element={<OneVideo />} />
					</Route>
					<Route path={AdminRoute.AdminRequestList} element={<RequestsLayout />}>
						<Route index element={<RequestsList />} />
						<Route path=':id' element={<OpenRequest />} />
						<Route path='new' element={<OneRequest />} />
					</Route>
				</Route>
				<Route path={AdminRoute.AdminAbout} element={<CommunityLayout />}>
					<Route index element={<AdminCommunityAbout />} />
					<Route path={AdminRoute.AdminAboutEtnosport} element={<AdminCommunityCulture />} />
					<Route path={AdminRoute.AdminAboutFun} element={<AdminCommunityGames />} />
				</Route>
				<Route path={AdminRoute.AdminEtnosportElement} element={<EtnosportElementLayout />}>
					<Route path={`${AdminRoute.AdminEtnosportInfo}/:id`} element={<EtnosportInfo />} />
					<Route path={`${AdminRoute.AdminEtnosportRules}/:id`} element={<EtnosportRules />} />
				</Route>
				<Route path={AdminRoute.AdminFunElement} element={<FunElementLayout />}>
					<Route path={`${AdminRoute.AdminFunInfo}/:id`} element={<FunInfo />} />
					<Route path={`${AdminRoute.AdminFunRules}/:id`} element={<FunRules />} />
				</Route>
				<Route path={AdminRoute.AdminObject} element={<ObjectElementLayout />}>
					<Route path={`${AdminRoute.AdminObjInfo}/:id`} element={<ObjectInfo />} />
					<Route path={`${AdminRoute.AdminObjNews}/:id`} element={<ObjectNews />} />
					<Route path={`${AdminRoute.AdminObjHistory}/:id`} element={<ObjectHistory />} />
					<Route path={`${AdminRoute.AdminObjEvents}/:id`} element={<ObjectEvents />} />
					<Route path={`${AdminRoute.AdminObjGallery}/:id`} element={<ObjectGallery />} />
					<Route path={`${AdminRoute.AdminObjVideos}/:id`} element={<ObjectVideos />} />
					<Route path={`${AdminRoute.AdminObjLocation}/:id`} element={<ObjectLocation />} />
				</Route>
				<Route path={AdminRoute.AdminObjects} element={<AdminObjects />} />

				<Route path={AdminRoute.AdminEventLayout} element={<AdminEventsLayout />}>
					<Route path={AdminRoute.AdminEventsList} element={<EventsList />} />
					<Route path={AdminRoute.AdminCiclesList} element={<CiclesList />}>
						<Route index element={<CiclesTable />} />
						<Route path=':id' element={<CicleInfo />} />
					</Route>
				</Route>

				<Route path={AdminRoute.AdminEvent} element={<OneEventLayout />}>
					<Route path={`${AdminRoute.AdminEventProfile}/:id`} element={<AdminEventProfile />} />
					<Route path={`${AdminRoute.AdminEventContacts}/:id`} element={<AdminEventContacts />} />
					<Route path={`${AdminRoute.AdminEventContent}/:id`} element={<AdminEventContent />} />
					<Route
						path={`${AdminRoute.AdminEventPartners}/:id`}
						element={<AdminEventPartnersLayout />}
					>
						<Route index element={<PartnerElements />} />
						<Route
							path={`${AdminRoute.AdminEventOnePartner}/:partnerId`}
							element={<OnePartner />}
						/>
					</Route>
					<Route path={`${AdminRoute.AdminEventNews}/:id`} element={<AdminEventNews />} />
					<Route path={`${AdminRoute.AdminEventVideos}/:id`} element={<AdminEventVideos />} />
					<Route
						path={`${AdminRoute.AdminEventProgram}/:id`}
						element={<AdminEventProgramsLayout />}
					>
						<Route index element={<ProgramElements />} />
						<Route
							path={`${AdminRoute.AdminEventOneProgram}/:programId`}
							element={<OneProgram />}
						/>
					</Route>
					<Route path={`${AdminRoute.AdminEventRules}/:id`} element={<AdminEventRules />} />
					<Route path={`${AdminRoute.AdminEventHistory}/:id`} element={<AdminEventHistory />} />
					<Route path={`${AdminRoute.AdminEventVisitors}/:id`} element={<VisitorsEventLayout />}>
						<Route path={`${AdminRoute.Tickets}`} element={<TicketsPage />}>
							<Route index element={<TicketsElements />} />
							<Route path=':subId' element={<OneTicket />} />
						</Route>
						<Route path={`${AdminRoute.Guests}`} element={<VisitorPage />}>
							<Route index element={<VisitorElements />} />
							<Route path=':subId' element={<OneVisitor />} />
						</Route>
						<Route path={`${AdminRoute.Participants}`} element={<VisitorPage />}>
							<Route index element={<ParticipantElements />} />
							<Route path=':subId' element={<OneParticipant />} />
						</Route>
						<Route path={`${AdminRoute.Groups}`} element={<GroupPage />}>
							<Route index element={<GroupElements />} />
							<Route path=':subId' element={<OneGroup />} />
						</Route>
						<Route path={`${AdminRoute.Pass}`} element={<PassPage />}>
							<Route index element={<PassElements />} />
						</Route>
					</Route>
				</Route>

				<Route path={AdminRoute.AdminPartners} element={<AdminPartnersLayout />}>
					<Route index element={<PartnersElements />} />
					<Route path={`${AdminRoute.AdminPartner}/:id`} element={<Partner />} />
				</Route>

				<Route path={AdminRoute.AdminFrequentQuestions} element={<AdminQuestionsLayout />}>
					<Route index element={<QuestionsElements />} />
					<Route path={`${AdminRoute.AdminQuestion}/:id`} element={<Question />} />
				</Route>

				<Route path={AdminRoute.AdminSupport} element={<AdminSupport />} />

				<Route path={AdminRoute.AdminSettings} element={<AdminSettings />} />
			</Route>
		</Routes>
	)
}
