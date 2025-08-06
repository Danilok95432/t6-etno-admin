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
			title: 'Настройка',
			link: `/event/event-settings/${id ?? 'new'}`,
			indexLink: `/event/event-settings/${id}/registration`,
		},
		{
			title: 'Контакты',
			link: `/event/event-contacts/${id ?? 'new'}`,
		},
		{
			title: 'Контент',
			link: `/event/event-content/${id ?? 'new'}`,
			indexLink: `/event/event-content/${id}/content`,
		},
		{
			title: 'Списки и участие',
			link: `/event/event-visitors/${id}`,
			indexLink: `/event/event-visitors/${id}/tickets`,
		},
		{
			title: 'Сервисы',
			link: `/event/event-services/${id ?? 'new'}`,
			indexLink: `/event/event-services/${id}/list`,
		},
		{
			title: 'Программа',
			link: `/event/event-program/${id ?? 'new'}`,
			indexLink: `/event/event-program/${id}/program`,
		},
		{
			title: 'Статистика',
			link: `/event/event-statistic/${id ?? 'new'}`,
			indexLink: `/event/event-statistic/${id}/log-enters`,
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
