import * as yup from "yup";

export const FormSchema = yup.object().shape({
  email: yup.string().required("Required").email("Please Enter a Valid Email"),
  password: yup.string().required("Required").min(8).max(20),
  ConfirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password Must Match")
    .required(),
    Fname: yup.string().required("Fname is required"),
    Lname: yup.string().required("Lname is required")
});

