import * as yup from "yup";

export const FormSchema = yup.object().shape({
    Name: yup.string().required("Name is Required"),
    Description: yup.string().required("Description is Required"),
    TaskStage: yup.string().required("TaskStage is Required"),
    StartDate: yup.string().required("StartDate is Required"),
    EndDate: yup.string().required("EndDate is Required"),
    Admins: yup.string().required("Admins is Required"),
    Budget: yup.string().required("Budget is Required"),
});
