import { type FC } from 'react'
import { type TabNavigationItem } from 'src/types/navigation'

import { NavLink, useLocation } from 'react-router-dom'
import { setActive } from 'src/helpers/utils'

import styles from './index.module.scss'

type TabNavigationProps = {
	navItems: TabNavigationItem[]
	variant?: 'main' | 'sub' | 'visitors'
}
export const TabNavigation: FC<TabNavigationProps> = ({ navItems, variant = 'main' }) => {
	const location = useLocation()

	const isCustomActive = (link: string) => {
		const currentPath = location.pathname
		const trimmedCurrentPath = currentPath.endsWith('/') ? currentPath.slice(0, -1) : currentPath
		const trimmedLink = link.endsWith('/') ? link.slice(0, -1) : link
		const currentSegments = trimmedCurrentPath.split('/').filter(Boolean)
		const linkSegments = trimmedLink.split('/').filter(Boolean)
		if (currentSegments.length < linkSegments.length) return false
		if (location.pathname.includes('/event/')) {
			for (let i = 0; i < linkSegments.length - 1; i++) {
				if (currentSegments[i] !== linkSegments[i]) {
					return false
				}
			}
		} else {
			for (let i = 0; i < linkSegments.length; i++) {
				if (currentSegments[i] !== linkSegments[i]) {
					return false
				}
			}
		}
		return true
	}

	const getLinkClass = (link: string, exact: boolean) => {
		const isActive = isCustomActive(link)
		if (exact) {
			return location.pathname === link ? styles.activeLink : undefined
		}
		return isActive ? styles.activeLink : undefined
	}

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
						className={({ isActive }) => {
							return location.pathname.includes('/event/')
								? getLinkClass(navEl.indexLink ?? navEl.link, navEl.exact ?? false)
								: setActive(isActive, styles.activeLink)
						}}
						to={navEl.indexLink ?? navEl.link}
						end={navEl.exact}
					>
						{navEl.title}
					</NavLink>
				</li>
			))}
		</ul>
	)
}
