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
import { useGetUsersSecondRequestQuery } from 'src/store/events/events.api'
import { type EventParticipantsSecond } from 'src/types/events'
import { usePagination } from 'src/hooks/usePagination/usePagination'

export const ParticipantElements = () => {
	const { id = '0' } = useParams()
	// const { data: usersData, isLoading } = useGetUsersQuery(id)
	const { data: usersData, isLoading } = useGetUsersSecondRequestQuery(id)
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

	const { currentPage, paginatedData, totalPages, setCurrentPage, setItemsPerPage } = usePagination(
		{
			data: usersData?.users ?? [],
			initialPage: 1,
			initialItemsPerPage: 100,
		},
	)

	const handlePageChange = (newPage: number) => {
		setCurrentPage(newPage)
	}

	const handleItemsPerPageChange = (value: string) => {
		const newValue = value === 'all' ? 'all' : parseInt(value)
		setItemsPerPage(newValue)
		setCurrentPage(1)
	}

	const navigate = useNavigate()

	const tableTitles = [
		'Фамилия, имя, отчество',
		'Группа участников',
		'Номер телефона',
		'Участие',
		'Допуск',
		'Билет',
		'Регион',
	]

	const formatObjectsTableData = (users: EventParticipantsSecond[]) => {
		return users.map((userEl) => {
			return {
				rowId: userEl.id,
				cells: [
					<p className={cn(styles.titleNewsTable)} key='0'>
						{userEl.fio}
					</p>,
					<p key='1'>{userEl.group === 'да' || userEl.group === 'Да' ? userEl.group_name : '-'}</p>,
					<p key='2'>{userEl.phone}</p>,
					<p key='3'>{userEl.roles}</p>,
					<p key='4'>{userEl.dopusk}</p>,
					<p key='5'>{userEl.ticket_number}</p>,
					<p key='6'>{userEl.region_name}</p>,
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
					rowData={formatObjectsTableData(paginatedData ?? [])}
					colTitles={tableTitles}
				/>
				<TableFooter
					totalElements={usersData?.users.length}
					currentPage={currentPage}
					totalPages={totalPages}
					onPageChange={handlePageChange}
					onLimitChange={handleItemsPerPageChange}
					downloadBtn
					addText='Добавить участника'
					addClickHandler={addClickHandler}
				/>
			</div>
		</>
	)
}
