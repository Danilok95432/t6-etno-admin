import { useNavigate } from 'react-router-dom'
import { type FC } from 'react'
import cn from 'classnames'
import { TableFiltration } from 'src/modules/table-filtration/table-filtration'
import { GameElementsFiltrationInputs } from './consts'

import { CustomTable } from 'src/components/custom-table/custom-table'
import { Loader } from 'src/components/loader/loader'
import { RowController } from 'src/components/row-controller/row-controller'
import { TableFooter } from 'src/components/table-footer/table-footer'
import { GridRow } from 'src/components/grid-row/grid-row'

import styles from './index.module.scss'
import { type VidItem } from 'src/types/about-etnosport'
import {
	useDeleteVidByIdMutation,
	useGetNewIdVidQuery,
	useHideVidByIdMutation,
} from 'src/store/vids/vids.api'

type GamesElementsProps = {
	vids?: VidItem[]
}

export const GamesElements: FC<GamesElementsProps> = ({ vids = [] }) => {
	const { refetch: getNewId } = useGetNewIdVidQuery(null)
	const [hideGameById] = useHideVidByIdMutation()
	const [deleteGameById] = useDeleteVidByIdMutation()

	const navigate = useNavigate()

	const addGame = async () => {
		const newIdResponse = await getNewId().unwrap()
		return newIdResponse.id
	}

	const tableTitles = ['Название вида этноспорта', 'Вид участия', 'Размещено', '']
	const formatVidsTableData = (vidData: VidItem[]) => {
		return vidData.map((vidEl) => {
			return {
				rowId: vidEl.id,
				cells: [
					<p className={cn({ 'hidden-cell-icon': vidEl.hidden })} key='0'>
						{vidEl.title}
					</p>,
					<p className={cn({ 'hidden-cell': vidEl.hidden })} key='1'>
						{vidEl.is_group ? 'Одиночное' : 'Групповое'}
					</p>,
					<p className={cn({ 'hidden-cell': vidEl.hidden })} key='2'></p>,
					<RowController
						id={vidEl.id}
						hideHandler={rowHideHandler}
						removeHandler={rowDeleteHandler}
						textOfHidden='Скрыть направление'
						key='3'
					/>,
				],
			}
		})
	}

	const rowDeleteHandler = async (id: string) => {
		await deleteGameById(id)
	}
	const rowHideHandler = async (id: string) => {
		await hideGameById(id)
	}

	const rowClickHandler = (id: string) => {
		navigate(`/fun/fun-info/${id}`)
	}

	const handleAddGameClick = async () => {
		const newId = await addGame()
		navigate(`/fun/fun-info/${newId}`)
	}

	if (!vids) return <Loader />

	return (
		<div>
			<GridRow $margin='0 0 15px 0' className={styles.searchRow}>
				<TableFiltration filterInputs={GameElementsFiltrationInputs} />
			</GridRow>
			<CustomTable
				className={styles.gameTable}
				rowData={formatVidsTableData(vids)}
				colTitles={tableTitles}
				rowClickHandler={rowClickHandler}
			/>
			<TableFooter
				totalElements={vids.length}
				addClickHandler={handleAddGameClick}
				addText='Добавить элемент'
			/>
		</div>
	)
}
