import { Button } from "semantic-ui-react";
import { Auth } from "../../api";

const auth = new Auth();

const Home = () => {
  return <Button onClick={auth.logout}>Cerrar Sesión</Button>;
};

export default Home;
