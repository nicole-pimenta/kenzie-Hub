import { Container } from "./styles";
import { FiClipboard } from "react-icons/fi";
import Button from "../Button";

const Card = ({ title, status, onClick }) => {
  return (
    <Container>
      <span>
        <FiClipboard /> Tecnologia : {title}
      </span>
      <span>
        <FiClipboard /> Status : {status}
      </span>
      <Button onClick={onClick}> Apagar</Button>
    </Container>
  );
};

export default Card;
