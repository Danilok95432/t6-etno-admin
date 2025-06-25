import * as yup from 'yup'

export type FunRulesInputs = {
	rules: string
}

export const funRulesSchema = yup.object().shape({
	rules: yup.string().required('Введите правила'),
})
