import * as yup from "yup";
export const Schema = yup.object().shape({
  title: yup
    .string()
    .min(2, "Too Short!")
    .max(30, "Too Long!")
    .required("title is required"),
  description: yup
    .string()
    .min(15, "Too Short!")
    .max(150, "Too Long!")
    .required("Description is required"),
  username: yup
    .string()
    .min(4, "not enough")
    .max(30, "Valid")
    .required("title is required !"),
  password: yup
    .string()
    .required("Please enter your password")
    .matches(
      /^.*(?=.{8,})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 8 characters, one uppercase, one number and one special case character"
    ),
  email: yup.string().nullable().email(),
  dob: yup.date().nullable().min(new Date(1900, 0, 1)),
});
