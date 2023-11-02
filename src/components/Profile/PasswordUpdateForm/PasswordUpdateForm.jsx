import { useFormik } from "formik";
import { Form } from "semantic-ui-react";
import { useState } from "react";
import { initialValues, validationSchema } from "./PasswordUpdateForm.data";
import { User } from "../../../api/user";

const user = new User();

const PasswordUpdateForm = ({ onClose }) => {
  //api
  const { updateUserPassword } = user;

  //useStates
  const [showPassword, setShowPassword] = useState(false);

  //functions
  const isShowPassord = () => setShowPassword((prev) => !prev);

  //formik
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        await updateUserPassword(formValue.password, formValue.newPassword);
        onClose();
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Input
        name="password"
        type={showPassword ? "text" : "password"}
        placeholder="Contraseña actual"
        icon={{
          name: showPassword ? "eye slash" : "eye",
          link: true,
          onClick: isShowPassord,
        }}
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password}
      />
      <Form.Input
        name="newPassword"
        type={showPassword ? "text" : "password"}
        placeholder="Nueva contraseña"
        icon={{
          name: showPassword ? "eye slash" : "eye",
          link: true,
          onClick: isShowPassord,
        }}
        value={formik.values.newPassword}
        onChange={formik.handleChange}
        error={formik.errors.newPassword}
      />
      <Form.Input
        name="repeatNewPassword"
        type={showPassword ? "text" : "password"}
        placeholder="Repetir la nueva contraseña"
        icon={{
          name: showPassword ? "eye slash" : "eye",
          link: true,
          onClick: isShowPassord,
        }}
        value={formik.values.repeatNewPassword}
        onChange={formik.handleChange}
        error={formik.errors.repeatNewPassword}
      />
      <Form.Button type="submit" fluid primary loading={formik.isSubmitting}>
        Actualizar contraseña
      </Form.Button>
    </Form>
  );
};

export default PasswordUpdateForm;
