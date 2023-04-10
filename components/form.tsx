import {useFormik} from "formik"
import * as Yup from "yup"
import {useRouter} from 'next/router'

export default function Form() {
    //router
    const router = useRouter()
    //formik logic
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phoneNumber: "",
            preferedTime: "",
            date:"",
            message: ""
        },
        //validation schema
        validationSchema: Yup.object({
            name: Yup
                .string()
                .min(1, "Enter your name")
                .required('Enter your name'),
            email: Yup
                .string()
                .min(3, 'please enter a valid email')
                .required('Email is required'),
            phoneNumber: Yup
                .number()
                .min(4, 'Please enter a valid number'),
            preferedTime: Yup
                .string()
                .min(3, 'please enter a valid time')
                .required('Please enter a valid time'),
            date:Yup.date().required('Please enter a valid date'),
            message: Yup
                .string()
                .min(5, 'please enter a valid message')
                .required('Please enter a valid message ')
        }),
        //submit form
        onSubmit: values => {
            // handle form submission
            console.log('ok')
            router.push({pathname: '/success', query: values})
        }
    })

    return ( 
    <> <form
        action="https://formsubmit.co/romyhugens@gmail.com"
        method="POST"
        onSubmit={formik.handleSubmit}
        className="flex flex-col form ">
        <label
            htmlFor="name"
            className={`${formik.errors.name
            ? 'text-red-400'
            : ""}`}>
            {formik.touched.name && formik.errors.name
                ? formik.errors.name
                : ""}
        </label>
        <input
            value={formik.values.name}
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            placeholder="Your name"
            className=""/> {/* {formik.errors.name ? formik.errors.name: ""} */}
        <label
            htmlFor="email"
            className={`${formik.errors.email
            ? 'text-red-400'
            : ""}`}>
            {formik.touched.email && formik.errors.email
                ? formik.errors.email
                : ""}
        </label>
        <input
            type="email"
            value={formik.values.email}
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Email"
            className=""/>
        <label
            htmlFor="phoneNumber"
            className={`${formik.errors.phoneNumber
            ? 'text-red-400'
            : ""}`}>
            {formik.touched.phoneNumber && formik.errors.phoneNumber
                ? formik.errors.phoneNumber
                : ""}
        </label>
        <input
            type='tel'
            value={formik.values.phoneNumber}
            name="phoneNumber"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Phone number (optional)"
            className=""/>
        <label
            htmlFor="preferedTime"
            className={`${formik.errors.preferedTime
            ? 'text-red-400'
            : ""}`}>
            {formik.touched.preferedTime && formik.errors.preferedTime
                ? formik.errors.preferedTime
                : ""}
        </label>
        <input
            type="time"
            value={formik.values.preferedTime}
            onBlur={formik.handleBlur}
            name="preferedTime"
            onChange={formik.handleChange}
            placeholder="Prefered time of call back"
                className="" />
            <label
            htmlFor="date"
            className={`${formik.errors.date
            ? 'text-red-400'
            : ""}`}>
            {formik.touched.date && formik.errors.date
                ? formik.errors.date
                : ""}
        </label>
        <input
            type='date'
            value={formik.values.date}
            name="date"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="date (optional)"
            className=""/>
        <label
            htmlFor="message"
            className={`${formik.errors.message
            ? 'text-red-400'
            : ""}`}>
            {formik.touched.message && formik.errors.message
                ? formik.errors.message
                : ""}
        </label>
        <input
            type="text"
            value={formik.values.message}
            name="message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Your message"
            className=""/>
        <span className="mb-6"></span>
        <button type='submit' className="btn__submit">
            Send form
        </button>
    </form> </>
  )
}