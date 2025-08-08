import { type FC } from 'react'
import styles from './index.module.scss'
import { StatusRequestList } from 'src/components/status-request-lists/status-request-lists'
import { formatDateTimeTicket } from 'src/helpers/utils'

type MainSectionProps = {
	isGroup?: boolean
	status?: string
	subEvents?: Array<{ title: string; id: string }>
	participants?: Array<{ fio: string; id: string }>
	cars?: Array<{ type: string; number: string; id: string }>
	services?: Array<{ title: string; id: string }>
	createdate?: string
}

export const MainSection: FC<MainSectionProps> = ({
	isGroup = false,
	status = '1',
	subEvents,
	participants,
	cars,
	services,
	createdate,
}) => {
	if (isGroup) {
		return (
			<div className={styles.mainSection}>
				<h1>Заявка групповая №25</h1>
				<StatusRequestList statusCode={status} />
				<div className={styles.infoBlock}>
					<div className={styles.infoWrapper}>
						<span>Автор заявки</span>
						<p>Автор</p>
					</div>
					<div className={styles.infoWrapper}>
						<span>Название события</span>
						<p>Событие</p>
					</div>
					<div className={styles.infoWrapper}>
						<span>Название команды</span>
						<p>Команда</p>
					</div>
					<div className={styles.infoWrapper}>
						<span>Тип группы</span>
						<p>Группа</p>
					</div>
				</div>
				<div className={styles.listBlock}>
					<div className={styles.infoWrapper}>
						<span className={styles.listTitle}>Выбранные подсобытия</span>
						<ul className={styles.list}>
							{subEvents?.map((el) => {
								return <li key={el.id}>{el.title}</li>
							})}
						</ul>
					</div>
					<div className={styles.infoWrapper}>
						<span className={styles.listTitle}>Выбранные участники</span>
						<ul className={styles.list}>
							{participants?.map((el) => {
								return (
									<li key={el.id}>
										<span className={styles.bold}>{el.fio}</span>
										<span>{el.id}</span>
									</li>
								)
							})}
						</ul>
					</div>
					<div className={styles.infoWrapper}>
						<span className={styles.listTitle}>Транспортные средства</span>
						<ul className={styles.list}>
							{cars?.map((el) => {
								return (
									<li key={el.id}>
										<span className={styles.bold}>{el.type}</span>
										<span>{el.number}</span>
									</li>
								)
							})}
						</ul>
					</div>
					<div className={styles.infoWrapper}>
						<span className={styles.listTitle}>Выбранные сервисы</span>
						<ul className={styles.list}>
							{services?.map((el) => {
								return <li key={el.id}>{el.title}</li>
							})}
						</ul>
					</div>
					<div className={styles.infoWrapper}>
						<span className={styles.listTitle}>Заявка подана:</span>
						<div className={styles.createdate}>
							<p>{formatDateTimeTicket(createdate ?? '', '.', true)[0]}</p>
							<p>{formatDateTimeTicket(createdate ?? '', '.', true)[1]}</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
	return (
		<div className={styles.mainSection}>
			<h1>Заявка одиночная №25</h1>
			<StatusRequestList statusCode={status} />
			<div className={styles.infoBlock}>
				<div className={styles.infoWrapper}>
					<span>Автор заявки</span>
					<p>Автор</p>
				</div>
				<div className={styles.infoWrapper}>
					<span>Название события</span>
					<p>Событие</p>
				</div>
				<div className={styles.infoWrapper}>
					<span>Выбранная роль</span>
					<p>Роль</p>
				</div>
			</div>
			<div className={styles.listBlock}>
				<div className={styles.infoWrapper}>
					<span className={styles.listTitle}>Выбранные подсобытия</span>
					<ul className={styles.list}>
						{subEvents?.map((el) => {
							return <li key={el.id}>{el.title}</li>
						})}
					</ul>
				</div>
				<div className={styles.infoWrapper}>
					<span className={styles.listTitle}>Транспортные средства</span>
					<ul className={styles.list}>
						{cars?.map((el) => {
							return (
								<li key={el.id}>
									<span className={styles.bold}>{el.type}</span>
									<span>{el.number}</span>
								</li>
							)
						})}
					</ul>
				</div>
				<div className={styles.infoWrapper}>
					<span className={styles.listTitle}>Выбранные сервисы</span>
					<ul className={styles.list}>
						{services?.map((el) => {
							return <li key={el.id}>{el.title}</li>
						})}
					</ul>
				</div>
				<div className={styles.infoWrapper}>
					<span>Заявка подана:</span>
					<div className={styles.createdate}>
						<p>{formatDateTimeTicket(createdate ?? '', '.', true)[0]}</p>
						<p>{formatDateTimeTicket(createdate ?? '', '.', true)[1]}</p>
					</div>
				</div>
			</div>
		</div>
	)
}
