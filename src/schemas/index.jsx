import * as Yup from "yup";


export const signUpSchema = Yup.object({
    name: Yup.string().max(25).required('Name is required'),
    emailId: Yup.string().email('Invalid email').required('Email is required'),
    mobileNumber: Yup.string().required('Mobile number is required'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
})