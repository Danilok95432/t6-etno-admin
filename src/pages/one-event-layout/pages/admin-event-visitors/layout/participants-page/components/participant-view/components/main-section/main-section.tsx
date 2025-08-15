import { type FC } from 'react'
import styles from './index.module.scss'
import { formatDateTimeTicket } from 'src/helpers/utils'
import { type EventParticipantsSecond } from 'src/types/events'
import { useParams } from 'react-router-dom'
import { useGetEventInfoQuery } from 'src/store/events/events.api'

type MainSectionProps = {
	data?: EventParticipantsSecond
}

export const MainSection: FC<MainSectionProps> = ({ data }) => {
	const { id = '' } = useParams()
	const { data: eventData } = useGetEventInfoQuery(id)
	return (
		<div className={styles.mainSection}>
			<h1>{`${data?.fio} (${data?.id})`}</h1>
			<div className={styles.infoBlock}>
				<div className={styles.infoWrapper}>
					<span>Участник</span>
					<p className={styles.author}>
						<strong>{`${data?.fio}, ID ${data?.id}`}</strong>
					</p>
				</div>
				<div className={styles.infoWrapper}>
					<span>Номер телефона</span>
					<p className={styles.author}>
						<p>{`+${data?.phone}`}</p>
					</p>
				</div>
				<div className={styles.infoWrapper}>
					<span>Название события</span>
					<p className={styles.author}>
						<p>{eventData?.title}</p>
					</p>
				</div>
				<div className={styles.infoWrapper}>
					<span>Доступ</span>
					<p>{data?.id}</p>
				</div>
				<div className={styles.infoWrapper}>
					<span>Билет</span>
					<p>{data?.ticket_number}</p>
				</div>
				<div className={styles.infoWrapper}>
					<span>Регион</span>
					<p>{data?.region_name}</p>
				</div>
			</div>
			{(data?.group === 'Да' || data?.group === 'да') && (
				<div className={styles.infoBlock}>
					<div className={styles.infoWrapper}>
						<span>Группа</span>
						<p>{data?.group_name}</p>
					</div>
					<div className={styles.infoWrapper}>
						<span>Роль в группе</span>
						<p>{data?.roles}</p>
					</div>
				</div>
			)}
			<div className={styles.listBlock}>
				{data?.sub_events && data?.sub_events?.length > 0 && (
					<div className={styles.infoWrapper}>
						<span className={styles.listTitle}>Выбранные подсобытия</span>
						<ul className={styles.list}>
							{data?.sub_events.map((el, ind) => {
								return <li key={ind}>{el}</li>
							})}
						</ul>
					</div>
				)}
				<div className={styles.infoWrapper}>
					<span>Виды участия</span>
					<p>{data?.roles}</p>
				</div>
				<div className={styles.infoWrapper}>
					<span>Описание товаров</span>
					<p>{data?.roles}</p>
				</div>
				<div className={styles.infoWrapper}>
					<span>Дата и время регистрации:</span>
					<div className={styles.createdate}>
						<p>{formatDateTimeTicket('', '.', true)[0]}</p>
						<p>{formatDateTimeTicket('', '.', true)[1]}</p>
					</div>
				</div>
				{data?.cars && data?.cars?.length > 0 && (
					<div className={styles.infoBlock}>
						<div className={styles.infoWrapper}>
							<span className={styles.listTitle}>Транспортные средства</span>
							<ul className={styles.list}>
								{data?.cars.map((el) => {
									return (
										<li key={el.id}>
											<span className={styles.bold}>{el.type}</span>
											<span>{el.number}</span>
										</li>
									)
								})}
							</ul>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}
