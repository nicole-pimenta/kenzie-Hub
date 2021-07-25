import { FaHubspot } from "react-icons/fa";
import { Container, Content } from "./styles";
import Button from "../../components/Button";
import { Redirect, useHistory } from "react-router-dom";

const Home = ({ authenticated }) => {
  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <Content>
        <h1>
          <FaHubspot /> Kenzie Hub
        </h1>
        <span> Maior hub de portifólios Kenzie Academy Brasil </span>
        <div>
          <Button onClick={() => handleNavigation("/signup")} whiteSchema>
            Cadastre-se
          </Button>
          <Button onClick={() => handleNavigation("/login")}> Login </Button>
        </div>
      </Content>
    </Container>
  );
};

export default Home;
