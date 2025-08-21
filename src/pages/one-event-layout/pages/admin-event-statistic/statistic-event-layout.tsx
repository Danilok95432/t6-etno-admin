import { Outlet, useLocation, useParams } from 'react-router-dom'
import { AdminContent } from 'src/components/admin-content/admin-content'

import { TabNavigation } from 'src/components/tab-navigation/tab-navigation'
import type { TabNavigationItem } from 'src/types/navigation'

import styles from './index.module.scss'
import { Container } from 'src/UI/Container/Container'
import { useGetAllLogsEnterQuery } from 'src/store/statistic/statistic.api'

export const StatisticEventLayout = () => {
	const { id = '' } = useParams()
	const { data: statistic } = useGetAllLogsEnterQuery({ id })
	const eventTabs: TabNavigationItem[] = [
		{
			title: 'Лог входов',
			link: `/event/event-statistic/${id}/log-enters`,
		},
		{
			title: 'Лог сервисов',
			link: `/event/event-statistic/${id}/log-services`,
		},
		{
			title: 'Лог оплат',
			link: `/event/event-statistic/${id}/log-payments`,
		},
		{
			title: 'Уникальные персоны',
			link: `/event/event-statistic/${id}/unique-persons`,
		},
		{
			title: 'АПП и инспекторы',
			link: `/event/event-statistic/${id}/inspectors`,
		},
		{
			title: 'По регионам',
			link: `/event/event-statistic/${id}/regions`,
		},
		{
			title: 'Сводки',
			link: `/event/event-statistic/${id}/summaries`,
		},
	]

	const getTitle = (): string => {
		const location = useLocation()
		const lastPath: string = location.pathname.split('/')[location.pathname.split('/').length - 1]
		return eventTabs.find((el) => el.link.includes(lastPath))?.title ?? ''
	}

	return (
		<AdminContent $padding='0' $backgroundColor='#ffffff' className={styles.visitorsPage}>
			<Container $padding='35px 35px 0 35px' $paddingMobile='35px'>
				<div className={styles.headRow}>
					<div className={styles.adminTitleTab}>
						<h2>{getTitle()}</h2>
						<TabNavigation variant='visitors' navItems={eventTabs} />
					</div>
					{location.pathname.includes('/log-enters') && (
						<div className={styles.statBlock}>
							<div className={styles.leftSide}>
								<p>Куплено билетов, всего:</p>
								<p>Прошло посетителей:</p>
								<p>Всего неуникальных проходов:</p>
							</div>
							<div className={styles.rightSide}>
								<p>{statistic?.tickets_total}</p>
								<p>{statistic?.people_total}</p>
								<p>{statistic?.prohod_total}</p>
							</div>
						</div>
					)}
				</div>
			</Container>
			<Outlet />
		</AdminContent>
	)
}
