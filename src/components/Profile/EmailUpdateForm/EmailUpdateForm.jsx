import { useFormik } from "formik";
import { useState } from "react";
import { Form } from "semantic-ui-react";
import { initialValues, validationSchema } from "./EmailUpdateForm.data";
import { User } from "../../../api";

const user = new User();

const EmailUpdateForm = ({ onClose }) => {
  //api
  const { updateUserEmail } = user;

  //useStates
  const [showPassword, setShowPassword] = useState(false);

  //functions
  const isShowPassord = () => setShowPassword((prev) => !prev);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        await updateUserEmail(formValue.email, formValue.password);
        onClose();
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Input
        name="email"
        placeholder="Nuevo correo electrónico"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.errors.email}
      />
      <Form.Input
        name="password"
        type={showPassword ? "text" : "password"}
        placeholder="Contraseña"
        icon={{
          name: showPassword ? "eye slash" : "eye",
          link: true,
          onClick: isShowPassord,
        }}
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password}
      />
      <Form.Button type="submit" fluid primary loading={formik.isSubmitting}>
        Actualizar Email
      </Form.Button>
    </Form>
  );
};

export default EmailUpdateForm;
