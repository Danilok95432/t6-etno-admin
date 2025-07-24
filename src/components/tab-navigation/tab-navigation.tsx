import { type FC } from 'react'
import { type TabNavigationItem } from 'src/types/navigation'

import { NavLink } from 'react-router-dom'
import { setActive } from 'src/helpers/utils'

import styles from './index.module.scss'

type TabNavigationProps = {
	navItems: TabNavigationItem[]
	variant?: 'main' | 'sub' | 'visitors'
}
export const TabNavigation: FC<TabNavigationProps> = ({ navItems, variant = 'main' }) => {
	if (variant === 'visitors') {
		return (
			<ul className={styles.visitorTabList}>
				{navItems?.map((navEl) => (
					<li key={navEl.title}>
						<NavLink
							className={({ isActive }) => setActive(isActive, styles.activeLink)}
							to={navEl.link}
							end={navEl.exact}
						>
							{navEl.title}
						</NavLink>
					</li>
				))}
			</ul>
		)
	}
	return (
		<ul className={variant === 'main' ? styles.tabNavList : styles.subtabList}>
			{navItems?.map((navEl) => (
				<li key={navEl.title}>
					<NavLink
						className={({ isActive }) => setActive(isActive, styles.activeLink)}
						to={navEl.link}
						end={navEl.exact}
					>
						{navEl.title}
					</NavLink>
				</li>
			))}
		</ul>
	)
}
