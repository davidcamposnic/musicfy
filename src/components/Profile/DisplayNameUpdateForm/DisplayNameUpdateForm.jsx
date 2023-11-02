import { Form } from "semantic-ui-react";
import { useFormik } from "formik";
import { User } from "../../../api";
import { initialValues, validationSchema } from "./DisplayNameUpdateForm.data";

const user = new User();

const DisplayNameUpdateForm = ({ onClose }) => {
  //api
  const { getMe, updateDisplayName } = user;
  const { displayName } = getMe();

  //formik
  const formik = useFormik({
    initialValues: initialValues(displayName),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        await updateDisplayName(formValue.displayName);
        onClose();
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Input
        name="displayName"
        placeholder="Nombre y Apellido"
        value={formik.values.displayName}
        onChange={formik.handleChange}
        error={formik.errors.displayName}
      />
      <Form.Button type="submit" primary fluid loading={formik.isSubmitting}>
        Actualizar nombre
      </Form.Button>
    </Form>
  );
};

export default DisplayNameUpdateForm;
