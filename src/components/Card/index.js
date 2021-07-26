import { Container } from "./styles";
import { FiClipboard } from "react-icons/fi";
import Button from "../Button";

const Card = ({ title, status, onClick }) => {
  return (
    <Container>
      <span>
        <FiClipboard /> {title}
      </span>
      <span>
        <FiClipboard /> {status}
      </span>
      <Button onClick={onClick}> Apagar</Button>
    </Container>
  );
};

export default Card;
