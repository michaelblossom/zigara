import * as yup from "yup";

export const signInValidationSchema = yup
  .object({
    email: yup
      .string()
      .email("Invalid Email!")
      .required("Please Enter Your Email"),
    password: yup
      .string()
      .required("Please Enter your password")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
  })
  .required();

export const signupValidationSchema = yup
  .object({
    firstName: yup.string().required("Required!"),
    lastName: yup.string().required("Required!"),
    phoneNumber: yup.string().required("Required!"),
    email: yup
      .string()
      .email("Invalid Email!")
      .required("Please Enter Your Email"),
    password: yup
      .string()
      .required("Please Enter your password")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
  })
  .required();

export const passwordResetValidationSchema = yup
  .object({
    email: yup
      .string()
      .email("Invalid Email!")
      .required("Please Enter Your Email"),
  })
  .required();

export const newPasswordValidationSchema = yup
  .object({
    password: yup
      .string()
      .required("Please Enter your password")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    newPassword: yup
      .string()
      .required("Please Enter your password")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    conPassword: yup
      .string()
      .oneOf([yup.ref("newPassword"), null], "Both passwords don’t match"),
  })
  .required();
export const accountSettingsSchema = yup
  .object({
    firstName: yup.string().required("Required!"),
    lastName: yup.string().required("Required!"),
    email: yup
      .string()
      .email("Invalid Email!")
      .required("Please Enter Your Email"),
    phoneNumber: yup.string().required("Required!"),
    country: yup.string().required("Required!"),
    state: yup.string().required("Required!"),
    bio: yup.string().required("Required!"),
  })
  .required();
