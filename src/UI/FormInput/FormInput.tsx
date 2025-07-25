import React, { useState, useRef, type InputHTMLAttributes, useEffect } from 'react'
import InputMask from 'react-input-mask'
import cn from 'classnames'
import styles from './index.module.scss'
import { Controller, type FieldError, useFormContext } from 'react-hook-form'
import { type SelOption } from 'src/types/select'

interface CustomProps {
	label: string
	error?: string
	isPassword?: boolean
	isPhone?: boolean
	isSmallLabel?: boolean
	isPhoneWithCode?: boolean
	maskChar?: string
	dynamicError?: FieldError | undefined
	name: string
	is_select?: boolean
	is_city_select?: boolean
	isCode?: boolean
	selectOptions?: SelOption[]
	errorForm?: string
	searchValue?: string
	setSearchValue?: (value: string) => void
	setErrorForm?: (value: string) => void
	disabled?: boolean
	disabledList?: boolean
	accept?: boolean
	isCodeAccepted?: boolean
	setIsCodeAccepted?: (arg0: boolean) => void
	setRegionValue?: (arg0: string) => void
	lockSearch?: boolean
	setLockSearch?: (arg0: boolean) => void
}

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & CustomProps

export const FormInput: React.FC<TextInputProps> = ({
	label,
	error,
	isPassword = false,
	isSmallLabel,
	isPhone = false,
	isCode = false,
	isCodeAccepted,
	disabledList,
	setIsCodeAccepted,
	setErrorForm,
	isPhoneWithCode = false,
	setRegionValue,
	className,
	errorForm,
	onFocus,
	maskChar = '_',
	name,
	// eslint-disable-next-line @typescript-eslint/naming-convention
	is_select,
	// eslint-disable-next-line @typescript-eslint/naming-convention
	is_city_select,
	lockSearch,
	setLockSearch,
	selectOptions,
	searchValue = '',
	disabled,
	accept,
	setSearchValue,
	...restProps
}) => {
	const { register, control, watch } = useFormContext()
	const inputRef = useRef<HTMLInputElement>(null)
	const [isFocused, setIsFocused] = useState(false)
	const [showOptions, setShowOptions] = useState(false)
	const fieldValue = watch(name)
	const shouldRaiseLabel = isFocused || fieldValue?.length > 0

	const handleFocus = () => setIsFocused(true)
	const handleBlur = () => setIsFocused(false)

	if (is_select) {
		return (
			<div className={cn(styles.inputContainer, className)}>
				<Controller
					name={name}
					control={control}
					render={({ field }) => {
						const wrapperRef = useRef<HTMLDivElement>(null)
						const [forceShowAllOptions, setForceShowAllOptions] = useState(false)

						useEffect(() => {
							const handleClickOutside = (event: MouseEvent) => {
								if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
									setShowOptions(false)
									setForceShowAllOptions(false)
								}
							}
							document.addEventListener('mousedown', handleClickOutside)
							return () => {
								document.removeEventListener('mousedown', handleClickOutside)
							}
						}, [])

						const filteredOptions = forceShowAllOptions
							? selectOptions
							: selectOptions?.filter((opt) =>
									// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
									opt.label.toLowerCase().includes((field.value || '').toLowerCase()),
								)

						return (
							<div
								className={cn(styles.inputWrapper, {
									[styles.focused]: isFocused,
									[styles.error]: !!error,
									[styles.disabled]: disabled,
								})}
								ref={wrapperRef}
							>
								<input
									className={styles.input}
									value={field.value || ''}
									disabled={disabled}
									onChange={(e) => {
										field.onChange(e.target.value)
										setRegionValue?.(e.target.value)
										setShowOptions(true)
										setForceShowAllOptions(false)
										if (is_city_select && lockSearch && setLockSearch) {
											setLockSearch?.(false)
										}
									}}
									onFocus={() => {
										setIsFocused(true)
										setShowOptions(true)
										setForceShowAllOptions(true)
									}}
								/>
								<label
									className={cn(styles.label, {
										[styles.raised]: shouldRaiseLabel,
									})}
								>
									{label}
								</label>
								{showOptions && !disabledList && filteredOptions && filteredOptions.length > 0 && (
									<ul className={styles.selectOptions}>
										{filteredOptions.map((option) => (
											<li
												key={option.value}
												className={styles.option}
												onClick={() => {
													field.onChange(option.label)
													setShowOptions(false)
													setForceShowAllOptions(false)
													if (is_city_select && setLockSearch) {
														setLockSearch?.(true)
													}
												}}
											>
												{option.label}
											</li>
										))}
									</ul>
								)}
							</div>
						)
					}}
				/>
			</div>
		)
	}

	return (
		<div className={cn(styles.inputContainer, className)}>
			<div
				className={cn(styles.inputWrapper, {
					[styles.focused]: isFocused,
					[styles.error]: !!error,
					[styles.disabled]: disabled,
					[styles.accept]: accept,
				})}
			>
				{isPhone || isPhoneWithCode ? (
					<Controller
						name={name}
						control={control}
						render={({ field }) => (
							<>
								<InputMask
									mask='+7 (999) 999-99-99'
									inputRef={(e) => {
										field.ref(e)
										;(inputRef as React.MutableRefObject<HTMLInputElement | null>).current = e
									}}
									value={field.value}
									onChange={field.onChange}
									onBlur={field.onBlur}
									onFocus={() => {
										handleFocus()
									}}
								>
									<input className={styles.input} type='tel' ref={field.ref} {...restProps} />
								</InputMask>
							</>
						)}
					/>
				) : (
					<input
						{...register(name)}
						className={styles.input}
						disabled={disabled}
						ref={(e) => {
							register(name).ref(e)
							;(inputRef as React.MutableRefObject<HTMLInputElement | null>).current = e
						}}
						onFocus={handleFocus}
						onBlur={handleBlur}
					/>
				)}
				<label className={cn(styles.label)}>{label}</label>
			</div>
		</div>
	)
}
