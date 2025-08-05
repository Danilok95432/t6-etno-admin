import { useNavigate, useParams } from 'react-router-dom'
import cn from 'classnames'

import { CustomTable } from 'src/components/custom-table/custom-table'
import { Loader } from 'src/components/loader/loader'
import { TableFooter } from 'src/components/table-footer/table-footer'
import { GridRow } from 'src/components/grid-row/grid-row'

import styles from './index.module.scss'
// import { useAppSelector } from 'src/hooks/store'
// import { getFiltrationValues } from 'src/modules/table-filtration/store/table-filtration.selectors'
import { TableFiltration } from 'src/modules/table-filtration/table-filtration'
import { TicketsFiltrationInputs } from './consts'
import { useGetTicketsQuery } from 'src/store/events/events.api'
import { type EventTickets } from 'src/types/events'
import { StatusTickets } from 'src/components/status-tickets/status-tickets'
import { formatDateTimeTicket } from 'src/helpers/utils'

export const TicketsElements = () => {
	const { id = '0' } = useParams()
	const { data: ticketsData, isLoading } = useGetTicketsQuery(id)
	// const filterValues = useAppSelector(getFiltrationValues)
	/*

	const { data: newsDataResponse, isLoading } = useGetAllNewsQuery({
		idEvent: id,
		title: filterValues.title,
		date: filterValues.date,
		tags: filterValues.tags,
	})
	const { refetch: getNewId } = useGetNewIdNewsQuery({ idEvent: id, idObject: '' })
	const [deleteNewsById] = useDeleteNewsByIdMutation()
	const [hideNewsById] = useHideNewsByIdMutation()

	const addNews = async () => {
		const newIdResponse = await getNewId().unwrap()
		return newIdResponse.id
	}

  */

	const navigate = useNavigate()

	const tableTitles = [
		'Статус',
		'Номер билета',
		'Дата и время продажи',
		'Группа',
		'Посетитель',
		'Телефон',
		'Регион',
		'Доставлен',
	]
	const sortTableTitles = ['Дата и время продажи']
	const formatObjectsTableData = (tickets: EventTickets[]) => {
		return tickets.map((ticketEl) => {
			return {
				rowId: ticketEl.id,
				cells: [
					<p className={cn(styles.titleNewsTable)} key='0'>
						{<StatusTickets statusCode={ticketEl.status} />}
					</p>,
					<p key='1'>{ticketEl.ticket_number}</p>,
					<p key='2' className={styles.date}>
						<span>{`${formatDateTimeTicket(ticketEl.createdate)[0]}`}</span>
						<span>{`${formatDateTimeTicket(ticketEl.createdate)[1]}`}</span>
					</p>,
					<p key='3' className={styles.center}>
						{ticketEl.group}
					</p>,
					<p key='4'>{ticketEl.fio}</p>,
					<p key='5'>{ticketEl.telphone}</p>,
					<p key='6'>{ticketEl.ticket_type}</p>,
					<p key='7'>{ticketEl.delivery_type}</p>,
				],
			}
		})
	}

	const rowClickHandler = (id: string) => {
		navigate(`/event/event-visitors/1/tickets/${id}`)
	}

	if (isLoading || !ticketsData?.tickets) return <Loader />

	return (
		<>
			<div className={styles.eventNewsContainer}>
				<GridRow $margin='0 0 15px 0' $padding='0 29px' className={styles.searchRow}>
					<TableFiltration filterInputs={TicketsFiltrationInputs} />
				</GridRow>
				<CustomTable
					className={styles.newsTable}
					rowData={formatObjectsTableData(ticketsData?.tickets ?? [])}
					colTitles={tableTitles}
					sortTitles={sortTableTitles}
					rowClickHandler={rowClickHandler}
				/>
				<TableFooter totalElements={ticketsData?.tickets.length} noAdd downloadBtn ticketStyle />
			</div>
		</>
	)
}
