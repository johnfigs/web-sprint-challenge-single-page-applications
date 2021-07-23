//schema for Form
import * as yup from 'yup'
import { string } from 'yup/lib/locale'

const formSchema = yup.object().shape({
    name: yup
    .string()
    .trim()
    .required('Please enter a name')
    .min(2, "name must be at least 2 characters"),
    size: yup
    .string()
    .required("Required"),
    specialText: yup
    .string()
    .trim(),
    chicken: yup
    .boolean()
    .oneOf([true, false]),
    pepperoni: yup
    .boolean()
    .oneOf([true, false]),
    sausage: yup
    .boolean()
    .oneOf([true, false]),
    pineapple: yup
    .boolean()
    .oneOf([true, false]),
    mushrooms: yup
    .boolean()
    .oneOf([true, false]),
})

export default formSchema