import { useEffect, useState } from 'react'
import { Outlet, useLocation, useParams } from 'react-router-dom'

import { TabNavigation } from 'src/components/tab-navigation/tab-navigation'

import adminStyles from 'src/routes/admin-layout/index.module.scss'
import { useGetEventInfoQuery } from 'src/store/events/events.api'
import type { TabNavigationItem } from 'src/types/navigation'

export const OneEventLayout = () => {
	const { id = '' } = useParams()
	const { data: eventInfoData } = useGetEventInfoQuery(id)
	const location = useLocation()
	const eventTabs: TabNavigationItem[] = [
		{
			title: 'Профиль события',
			link: `/event/event-profile/${id ?? 'new'}`,
		},
		{
			title: 'Контакты',
			link: `/event/event-contacts/${id ?? 'new'}`,
		},
		{
			title: 'Контент',
			link: `/event/event-content/${id ?? 'new'}`,
		},
		{
			title: 'Партнеры',
			link: `/event/event-partners/${id ?? 'new'}`,
		},
		{
			title: 'Новости',
			link: `/event/event-news/${id ?? 'new'}`,
		},
		{
			title: 'Видеолента',
			link: `/event/event-videos/${id ?? 'new'}`,
		},
		{
			title: 'Подсобытия',
			link: `/event/event-program/${id ?? 'new'}`,
		},
		{
			title: 'Правила',
			link: `/event/event-rules/${id ?? 'new'}`,
		},
		{
			title: 'Посетители',
			link: `/event/event-visitors/${id}/tickets`,
		},
	]
	const [isProgramPage, setIsProgramPage] = useState<boolean>(false)

	useEffect(() => {
		setIsProgramPage(location.pathname.includes('/one-program'))
	}, [location.pathname])
	return (
		<>
			<div className={adminStyles.adminTitleTab}>
				{!isProgramPage ? (
					<h1>{eventInfoData?.title !== '' ? eventInfoData?.title : 'Новое событие'}</h1>
				) : (
					<h1>Подсобытие</h1>
				)}
				{!isProgramPage && <TabNavigation navItems={eventTabs} />}
			</div>
			<Outlet />
		</>
	)
}
