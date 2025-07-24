import { Outlet, useParams } from 'react-router-dom'
import { AdminContent } from 'src/components/admin-content/admin-content'

import { TabNavigation } from 'src/components/tab-navigation/tab-navigation'
import { useGetEventInfoQuery } from 'src/store/events/events.api'
import type { TabNavigationItem } from 'src/types/navigation'

import styles from './index.module.scss'
import { Container } from 'src/UI/Container/Container'
import { formatEventDates } from 'src/helpers/utils'

export const VisitorsEventLayout = () => {
	const { id = '' } = useParams()
	const { data: eventInfoData } = useGetEventInfoQuery(id)
	const eventTabs: TabNavigationItem[] = [
		{
			title: 'Билеты',
			link: `/event/event-visitors/${id}/tickets`,
		},
		{
			title: 'Посетители',
			link: `/event/event-visitors/${id}/visitors`,
		},
		{
			title: 'Группы',
			link: `/event/event-visitors/${id}/groups`,
		},
		{
			title: 'Проходы',
			link: `/event/event-visitors/${id}/pass`,
		},
	]
	return (
		<AdminContent $padding='0' $backgroundColor='#ffffff' className={styles.visitorsPage}>
			<Container $padding='35px 35px 0 35px' $paddingMobile='35px'>
				<div className={styles.adminTitleTab}>
					<h2>{eventInfoData?.title}</h2>
					<p>
						{formatEventDates(
							eventInfoData?.date_from ?? '',
							eventInfoData?.date_to ?? '',
							eventInfoData?.locations_list?.[0].label ?? '',
						)}
					</p>
					<TabNavigation variant='visitors' navItems={eventTabs} />
				</div>
			</Container>
			<Outlet />
		</AdminContent>
	)
}
