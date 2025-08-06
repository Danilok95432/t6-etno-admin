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
import { VisitorFiltrationInputs } from './consts'
import { useGetGuestsQuery } from 'src/store/events/events.api'
import { type EventGuests } from 'src/types/events'
import { formatDateTimeTicket } from 'src/helpers/utils'

export const VisitorElements = () => {
	const { id = '0' } = useParams()
	const { data: guestsData, isLoading } = useGetGuestsQuery(id)
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
		'Фамилия, имя, отчество',
		'Группа',
		'Номер телефона',
		'Роль',
		'Билет',
		'Регион',
		'Регистрация',
		'Заезд и выезд',
	]
	const formatObjectsTableData = (guests: EventGuests[]) => {
		return guests.map((guestEl) => {
			return {
				rowId: guestEl.id,
				cells: [
					<p className={cn(styles.titleNewsTable)} key='0'>
						{guestEl.fio}
					</p>,
					<p key='1'>{'-'}</p>,
					<p key='2'>{guestEl.phone}</p>,
					<p key='3'>{guestEl.role}</p>,
					<p key='4'>{guestEl.ticket}</p>,
					<p key='5'>{'-'}</p>,
					<p key='6'>{formatDateTimeTicket(guestEl.createdate)}</p>,
					<p key='7'>{'-'}</p>,
				],
			}
		})
	}

	const rowClickHandler = (id: string) => {
		navigate(`/event/event-visitors/1/guests/${id}`)
	}

	const addClickHandler = () => {
		// const newId = await addNews()
		navigate(`/event/event-visitors/1/guests/1`)
	}

	if (isLoading || !guestsData?.guests) return <Loader />

	return (
		<>
			<div className={styles.eventNewsContainer}>
				<GridRow $margin='0 0 15px 0' $padding='0 29px' className={styles.searchRow}>
					<TableFiltration filterInputs={VisitorFiltrationInputs} />
				</GridRow>
				<CustomTable
					className={styles.newsTable}
					rowData={formatObjectsTableData(guestsData?.guests ?? [])}
					colTitles={tableTitles}
					rowClickHandler={rowClickHandler}
				/>
				<TableFooter
					totalElements={guestsData?.guests.length}
					addText='Добавить гостя'
					addClickHandler={addClickHandler}
					downloadBtn
				/>
			</div>
		</>
	)
}
