import { useState } from "react";
import "./Auth.scss";
import { Image } from "semantic-ui-react";
import { logoNameWhite } from "../../assets";
import { AuthOption, RegisterForm, LoginForm } from "../../components/Auth";

const Auth = () => {
  const [typeForm, setTypeForm] = useState(null);
  const openLogin = () => setTypeForm("Login");
  const openRegister = () => setTypeForm("Register");
  const goBack = () => setTypeForm(null);

  const renderForm = () => {
    if (typeForm === "Login") {
      return <LoginForm openRegister={openRegister} goBack={goBack} />;
    }
    if (typeForm === "Register") {
      return <RegisterForm openLogin={openLogin} goBack={goBack} />;
    }
    return <AuthOption openLogin={openLogin} openRegister={openRegister} />;
  };

  return (
    <div className="auth">
      <div className="auth__content">
        <Image
          src={logoNameWhite}
          alt="Musicfy"
          className="auth__content-logo"
        />
        {renderForm()}
      </div>
    </div>
  );
};

export default Auth;
