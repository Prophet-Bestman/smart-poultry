import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required("email name is required")
    .email("Must be a valid email"),
  password: yup.string().required("Password is required"),
});

export const signupSchema = yup.object().shape({
  email: yup
    .string()
    .required("email name is required")
    .email("Must be a valid email"),
  fullName: yup.string().required("Full name is required"),
  password: yup
    .string()
    .required("Password is required")
    .matches(
      /((?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*\W)\w.{6,18}\w)/,
      "Password should have at least one upper and lowercase, a number and a special character"
    ),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), undefined], "Passwords must match")
    .required("Re-enter password to continue"),
});

export type LoginValues = yup.InferType<typeof loginSchema>;
export type SignupValues = yup.InferType<typeof signupSchema>;
