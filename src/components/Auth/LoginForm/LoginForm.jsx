import { useState } from "react";
import { Form, Icon } from "semantic-ui-react";
import { useFormik } from "formik";
import { Auth } from "../../../api";
import { initialValues, validationSchema } from "./LoginForm.data";
import "./LoginForm.scss";

const auth = new Auth();

const LoginForm = ({ openRegister, goBack }) => {
  const [showPassword, setShowPassword] = useState(false);
  const onShowHiddenPassword = () => setShowPassword((prev) => !prev);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        await auth.login(formValue.email, formValue.password);
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <div className="login-form">
      <h1>Música para todos</h1>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Input
          name="email"
          type="text"
          placeholder="Correo electronico"
          icon="mail outline"
          onChange={formik.handleChange}
          value={formik.values.email}
          error={formik.errors.email}
        />
        <Form.Input
          name="password"
          type={showPassword ? "text" : "password"}
          placeholder="Contraseña"
          icon={
            <Icon
              name={showPassword ? "eye slash" : "eye"}
              link
              onClick={onShowHiddenPassword}
            />
          }
          onChange={formik.handleChange}
          value={formik.values.password}
          error={formik.errors.password}
        />
        <Form.Button type="submit" primary fluid loading={formik.isSubmitting}>
          Inciar Sesión
        </Form.Button>
      </Form>
      <div className="login-form__options">
        <p onClick={goBack}>Volver</p>
        <p>
          ¿No tienes cuenta? <span onClick={openRegister}>Registrarse</span>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
