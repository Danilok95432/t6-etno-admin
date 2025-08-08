import { type FC } from 'react'
import { ListRequestStatusOkSVG } from 'src/UI/icons/listRequestStatusOkSVG'
import { ListRequestStatusPendingSVG } from 'src/UI/icons/listRequestStatusPendingSVG'
import { RequestStatusRejectedSVG } from 'src/UI/icons/requestStatusRejectedSVG'
import cn from 'classnames'

import styles from './index.module.scss'

type StatusRequestsListProps = {
	statusCode?: string
}

export const StatusRequestList: FC<StatusRequestsListProps> = ({ statusCode }) => {
	switch (statusCode) {
		case '1':
			return (
				<div className={cn(styles.statusRequest, styles.pending)}>
					<ListRequestStatusPendingSVG />
					<p>Статус: ожидание</p>
				</div>
			)
		case '2':
			return (
				<div className={cn(styles.statusRequest, styles.reject)}>
					<RequestStatusRejectedSVG />
					<p>Статус: отклонена</p>
				</div>
			)
		case '3':
			return (
				<div className={cn(styles.statusRequest, styles.ok)}>
					<ListRequestStatusOkSVG />
					<p>Статус: принята</p>
				</div>
			)
		default:
			break
	}
}
