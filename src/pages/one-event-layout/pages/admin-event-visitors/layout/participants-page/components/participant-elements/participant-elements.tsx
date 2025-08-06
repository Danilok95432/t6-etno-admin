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
import { useGetUsersQuery } from 'src/store/events/events.api'
import { type EventParticipants } from 'src/types/events'
import Select from 'react-dropdown-select'
import { formatDateTimeTicket } from 'src/helpers/utils'

export const ParticipantElements = () => {
	const { id = '0' } = useParams()
	const { data: usersData, isLoading } = useGetUsersQuery(id)
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
		'Группа участников',
		'Номер телефона',
		'Участие',
		'Билет',
		'Регион',
		'Регистрация',
		'Допуск',
		'Заезд и выезд',
	]
	const formatObjectsTableData = (users: EventParticipants[]) => {
		return users.map((userEl) => {
			return {
				rowId: userEl.id,
				cells: [
					<p className={cn(styles.titleNewsTable)} key='0'>
						{userEl.fio}
					</p>,
					<p key='1'>{userEl.group}</p>,
					<p key='2'>{userEl.phone}</p>,
					<p key='3'>{'-'}</p>,
					<p key='4'>{userEl.ticket_number}</p>,
					<p key='5'>{userEl.ticket_type}</p>,
					<p key='6'>{formatDateTimeTicket(userEl.createdate)}</p>,
					<p key='7' onClick={(e) => e.stopPropagation()}>
						{
							<Select
								className={cn(styles.filterInput, styles._select)}
								options={[
									{ label: 'Допущен', value: '0' },
									{ label: 'Ожидает', value: '1' },
								]}
								values={[{ label: 'Допущен', value: '0' }]}
								onChange={(selectedValues) => selectedValues}
								searchable={false}
								dropdownPosition='auto'
							/>
						}
					</p>,
					<p key='8'>{'-'}</p>,
				],
			}
		})
	}

	const addClickHandler = () => {
		// const newId = await addNews()
		navigate(`/event/event-visitors/1/participants/1`)
	}

	if (isLoading || !usersData?.users) return <Loader />

	return (
		<>
			<div className={styles.eventNewsContainer}>
				<GridRow $margin='0 0 15px 0' $padding='0 29px' className={styles.searchRow}>
					<TableFiltration filterInputs={VisitorFiltrationInputs} />
				</GridRow>
				<CustomTable
					className={styles.newsTable}
					rowData={formatObjectsTableData(usersData?.users ?? [])}
					colTitles={tableTitles}
				/>
				<TableFooter
					totalElements={usersData?.users.length}
					downloadBtn
					addText='Добавить участника'
					addClickHandler={addClickHandler}
				/>
			</div>
		</>
	)
}
