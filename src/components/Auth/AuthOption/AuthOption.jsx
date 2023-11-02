import { Button } from "semantic-ui-react";
import "./AuthOption.scss";

const AuthOption = ({ openLogin, openRegister }) => {
  return (
    <div className="auth-options">
      <h1>Millones de canciones, gratis en Musicfy</h1>
      <Button className="register" onClick={openRegister}>
        Registrate gratis
      </Button>
      <Button className="login" onClick={openLogin}>
        Inicia Sesión
      </Button>
    </div>
  );
};

export default AuthOption;
