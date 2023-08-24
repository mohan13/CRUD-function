import * as yup from "yup";
export const Schema = yup.object().shape({
  title: yup
    .string()
    .min(2, "Too Short!")
    .max(150, "Too Long!")
    .required("title is required"),
  description: yup
    .string()
    .min(15, "Too Short!")
    .max(1500, "Too Long!")
    .required("Description is required"),
  time: yup.date().nullable().min(new Date(1900, 0, 1)),
  image: yup
    .mixed()

    .required("File is required"),
});
