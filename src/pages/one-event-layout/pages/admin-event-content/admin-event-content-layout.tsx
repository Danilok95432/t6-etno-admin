import { Outlet, useParams } from 'react-router-dom'
import { AdminContent } from 'src/components/admin-content/admin-content'

import { TabNavigation } from 'src/components/tab-navigation/tab-navigation'
import type { TabNavigationItem } from 'src/types/navigation'

import styles from './index.module.scss'
import { Container } from 'src/UI/Container/Container'

export const AdminEventContentLayout = () => {
	const { id = '' } = useParams()
	const eventTabs: TabNavigationItem[] = [
		{
			title: 'Контент',
			link: `/event/event-content/${id}/content`,
		},
		{
			title: 'Новости',
			link: `/event/event-content/${id}/event-news`,
		},
		{
			title: 'Видеолента',
			link: `/event/event-content/${id}/event-videos`,
		},
		{
			title: 'Партнеры',
			link: `/event/event-content/${id}/event-partners`,
		},
		{
			title: 'Правила',
			link: `/event/event-content/${id}/event-rules`,
		},
	]
	return (
		<AdminContent
			$padding='0'
			$backgroundColor={
				location.pathname.includes('/content') || location.pathname.includes('/event-rules')
					? '#f5f7fa'
					: '#ffffff'
			}
			className={styles.visitorsPage}
		>
			{!location.pathname.includes('one-partner') && (
				<Container $padding='35px 35px 0 35px' $paddingMobile='35px'>
					<div className={styles.headRow}>
						<div className={styles.adminTitleTab}>
							<TabNavigation variant='visitors' navItems={eventTabs} />
						</div>
					</div>
				</Container>
			)}
			<Outlet />
		</AdminContent>
	)
}
