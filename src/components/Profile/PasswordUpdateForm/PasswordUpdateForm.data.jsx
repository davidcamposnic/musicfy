import * as Yup from "yup";

export function initialValues() {
  return {
    password: "",
    newPassword: "",
    repeatNewPassword: "",
  };
}

export function validationSchema() {
  return Yup.object({
    password: Yup.string().required(),
    newPassword: Yup.string().required(),
    repeatNewPassword: Yup.string()
      .required()
      .oneOf([Yup.ref("newPassword")], true),
  });
}
