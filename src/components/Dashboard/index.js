import { Redirect } from "react-router-dom";
import { Container, InputContainer, TasksContainer } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useForm } from "react-hook-form";
import { FiEdit2 } from "react-icons/fi";
import Card from "../Card";

const Dashboard = ({ authenticated }) => {
  const { register, handleSubmit } = useForm();

  if (!authenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <Container>
      <InputContainer>
        <time>25 de Julho de 2021</time>
        <section>
          <Input
            icon={FiEdit2}
            placeholder="Nova Tecnologia"
            register={register}
            name="task"
          />
          <Button type="submit"> Adicionar </Button>
        </section>
      </InputContainer>
      <TasksContainer>
        {[1, 2, 3].map((_) => (
          <Card title="OLa" date="25 de Julho de 2021" onClick={() => {}} />
        ))}
      </TasksContainer>
    </Container>
  );
};

export default Dashboard;
