import { Container } from "./styles.js";
import { FiClipboard, FiCalendar } from "react-icons/fi";
import Button from "../Button";

const Card = ({ title, date, onClick }) => {
  return (
    <div>
      <Container>
        <span>
          <FiClipboard /> {title}
        </span>
        <hr />
        <time>
          <FiCalendar /> {date}
        </time>
      </Container>
      <Button onClick={onClick}></Button>
    </div>
  );
};

export default Card;
