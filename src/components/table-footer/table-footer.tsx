import { type FC } from 'react'
import cn from 'classnames'

import styles from './index.module.scss'
import { AddButton } from 'src/UI/AddButton/AddButton'
import { MainSelect } from 'src/UI/MainSelect/MainSelect'
import { PrevPaginationArrowSvg } from 'src/UI/icons/prevPaginationArrowSVG'
import { NextPaginationArrowSvg } from 'src/UI/icons/NextPaginationArrowSvg'
import { FlexRow } from 'src/components/flex-row/flex-row'
import { DownloadTableCSV } from 'src/UI/icons/downloadTableCSV'

type TableFooterProps = {
	addText?: string
	addClickHandler?: () => void
	noAdd?: boolean
	bigDownloadBtn?: boolean
	totalElements?: number
	currentPage?: number
	totalPages?: number
	className?: string
	downloadBtn?: boolean
	downloadHandler?: () => void
}

export const TableFooter: FC<TableFooterProps> = ({
	addText = 'Добавить',
	addClickHandler,
	noAdd = false,
	bigDownloadBtn = false,
	downloadBtn = false,
	totalElements = 0,
	currentPage = 1,
	totalPages = 1,
	className,
}) => {
	return (
		<div className={className ?? styles.tableFooterWrapper}>
			<div className={cn(styles.tableFooter, { [styles.tableFooterShort]: downloadBtn })}>
				<div className={styles.pagination}>
					<div className={styles.paginationInfo}>
						<span>Всего элементов: {totalElements}</span>
						<FlexRow $alignItems='center' $gap='0'>
							Выводить по:
							<MainSelect
								className={styles.limitSelect}
								items={[
									{ label: '10', value: '10' },
									{ label: '50', value: '50' },
								]}
							/>
						</FlexRow>
					</div>
					<div className={styles.paginationControllers}>
						<button type='button'>
							<PrevPaginationArrowSvg />
						</button>
						<span>
							{currentPage} из {totalPages}
						</span>
						<button type='button'>
							<NextPaginationArrowSvg />
						</button>
					</div>
				</div>
				{downloadBtn && (
					<button
						className={cn(
							styles.downloadBtn,
							{ [styles.downloadBtnDark]: noAdd },
							{ [styles.bigDownloadBtn]: bigDownloadBtn },
						)}
					>
						<DownloadTableCSV color={noAdd && !bigDownloadBtn ? '#ffffff' : '#184F71'} />
						<p>Скачать список в CSV</p>
					</button>
				)}
				{!noAdd && (
					<AddButton className={styles.tableFooterAddBtn} onClick={addClickHandler}>
						{addText}
					</AddButton>
				)}
			</div>
		</div>
	)
}
