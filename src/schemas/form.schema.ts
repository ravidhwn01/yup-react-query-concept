import * as yup from "yup";

export const FormSchema = yup
  .object({
    firstname: yup.string().required("first name is required"),
    lastname: yup.string().required("first name is required"),
    gender: yup.string().required("please select gender"),
    email: yup.string().required("please enter email"),
    password: yup.string().required("please enter password"),
    confirmpassword: yup.string().required("please enter password"),
  })
  .required();
