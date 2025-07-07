import { TabNavigation } from 'src/components/tab-navigation/tab-navigation'
import { Outlet } from 'react-router-dom'
import { AdminContent } from 'src/components/admin-content/admin-content'

import adminStyles from 'src/routes/admin-layout/index.module.scss'
import styles from './index.module.scss'
import { eventTabs } from './consts'

export const AdminEventsLayout = () => {
	return (
		<>
			<div className={adminStyles.adminTitleTab}>
				<h1>События</h1>
				<TabNavigation navItems={eventTabs} />
			</div>
			<AdminContent
				className={styles.eventsListContent}
				$backgroundColor='#ffffff'
				$padding='30px 0'
			>
				<Outlet />
			</AdminContent>
		</>
	)
}
