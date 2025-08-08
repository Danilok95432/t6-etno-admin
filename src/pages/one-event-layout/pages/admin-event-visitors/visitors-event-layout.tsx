import { Outlet, useLocation, useParams } from 'react-router-dom'
import { AdminContent } from 'src/components/admin-content/admin-content'

import { TabNavigation } from 'src/components/tab-navigation/tab-navigation'
import type { TabNavigationItem } from 'src/types/navigation'

import styles from './index.module.scss'
import { Container } from 'src/UI/Container/Container'

export const VisitorsEventLayout = () => {
	const { id = '' } = useParams()
	const eventTabs: TabNavigationItem[] = [
		{
			title: 'Регистрация',
			link: `/event/event-visitors/${id}/tickets`,
		},
		{
			title: 'Заявки',
			link: `/event/event-visitors/${id}/requests`,
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
			link: `/event/event-visitors/${id}/transport`,
		},
		{
			title: 'Браслеты',
			link: `/event/event-visitors/${id}/bracelets`,
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
				{!location.pathname.includes('/requests/') && (
					<div className={styles.headRow}>
						<div className={styles.adminTitleTab}>
							<h2>{getTitle() === 'Регистрация' ? 'Списки и участие' : getTitle()}</h2>
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
				)}
			</Container>
			<Outlet />
		</AdminContent>
	)
}
