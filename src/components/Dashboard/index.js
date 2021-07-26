import { Redirect } from "react-router-dom";
import { Container, InputContainer, TasksContainer } from "./styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FiEdit2 } from "react-icons/fi";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useEffect, useState } from "react";
import api from "../../services/api";
import Card from "../Card";

const Dashboard = ({ authenticated }) => {
  const user = localStorage[`@kenzieHub:user`];
  console.log(user);
  const [tech, setTech] = useState([]);

  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatorio"),
    status: yup.string().required("Campo obrigatorio"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = ({ title, status }) => {
    const tasks = { title, status };

    console.log(tasks);

    api
      .post(`/${user}/techs`, tasks)
      .then((response) => console.log(response.data))
      .catch((err) => console.err);
  };

  if (!authenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <Container>
      <InputContainer onSubmit={handleSubmit(onSubmitFunction)}>
        <section>
          <Input
            register={register}
            icon={FiEdit2}
            placeholder="Nova Tecnologia"
            name="title"
            error={errors.title?.message}
          />
          <Input
            register={register}
            icon={FiEdit2}
            placeholder="Status"
            name="status"
            error={errors.status?.message}
          />
          <Button type="submit"> Cadastrar</Button>
        </section>
      </InputContainer>
      <TasksContainer>
        {[1, 2, 3].map((_) => (
          <Card title="OLa" status="2" onClick={() => {}} />
        ))}
      </TasksContainer>
    </Container>
  );
};

export default Dashboard;
