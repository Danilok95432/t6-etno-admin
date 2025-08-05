import { Outlet, useLocation, useParams } from 'react-router-dom'
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
	const location = useLocation()
	const eventTabs: TabNavigationItem[] = [
		{
			title: 'Регистрация',
			link: `/event/event-visitors/${id}/tickets`,
		},
		{
			title: 'Заявки',
			link: `/event/event-visitors/${id}/tickets`,
		},
		{
			title: 'Гости',
			link: `/event/event-visitors/${id}/guests`,
		},
		{
			title: 'Участники',
			link: `/event/event-visitors/${id}/participants`,
		},
		{
			title: 'Группы',
			link: `/event/event-visitors/${id}/groups`,
		},
		{
			title: 'Транспорт',
			link: `/event/event-visitors/${id}/pass`,
		},
		{
			title: 'Браслеты',
			link: `/event/event-visitors/${id}/pass`,
		},
	]
	return (
		<AdminContent $padding='0' $backgroundColor='#ffffff' className={styles.visitorsPage}>
			<Container $padding='35px 35px 0 35px' $paddingMobile='35px'>
				<div className={styles.headRow}>
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
					{location.pathname.includes('/pass') && (
						<div className={styles.statBlock}>
							<div className={styles.leftSide}>
								<p>Куплено билетов, всего: </p>
								<p>Прошло посетителей: </p>
								<p>Всего неуникальных проходов: </p>
							</div>
							<div className={styles.rightSide}>
								<p>{0}</p>
								<p>{0}</p>
								<p>{0}</p>
							</div>
						</div>
					)}
				</div>
			</Container>
			<Outlet />
		</AdminContent>
	)
}
