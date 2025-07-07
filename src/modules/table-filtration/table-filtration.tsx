import { type FC, useEffect } from 'react'
import { type FilterTableInput } from 'src/types/global'

import { IMaskInput } from 'react-imask'
import cn from 'classnames'

import { useActions } from 'src/hooks/actions/actions'

import styles from './index.module.scss'
import Select from 'react-dropdown-select'

type TableFiltrationProps = {
	filterInputs: FilterTableInput[]
}

export const TableFiltration: FC<TableFiltrationProps> = ({ filterInputs }) => {
	const { setTableFiltration, clearTableFiltration } = useActions()

	const handleChangeFiltration = (key: string, value: string) => {
		setTableFiltration({ key, value })
	}

	useEffect(() => {
		return () => {
			clearTableFiltration()
		}
	}, [])

	return (
		<>
			{filterInputs.map(({ name, placeholder, type, options = [] }) => {
				if (type === 'date') {
					return (
						<IMaskInput
							className={cn(styles.filterInput, styles._date)}
							key={name}
							name={name}
							mask={Date}
							placeholder={placeholder}
							onChange={(e) => handleChangeFiltration(name, e.currentTarget.value)}
						/>
					)
				} else if (type === 'select') {
					return (
						<Select
							className={cn(styles.filterInput, styles._select)}
							key={name}
							placeholder={placeholder}
							options={options.map((option) => ({
								value: option.value,
								label: option.label,
							}))}
							values={[]}
							onChange={(selectedValues) => {
								if (selectedValues.length > 0) {
									handleChangeFiltration(name, selectedValues[0].value)
								} else {
									handleChangeFiltration(name, '')
								}
							}}
							searchable={false}
							dropdownPosition='auto'
						/>
					)
				}
				return (
					<input
						className={cn(styles.filterInput, styles._text)}
						key={name}
						placeholder={placeholder}
						onChange={(e) => handleChangeFiltration(name, e.currentTarget.value)}
					/>
				)
			})}
		</>
	)
}
