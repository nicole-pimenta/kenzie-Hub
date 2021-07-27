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

const Dashboard = ({ authenticated, user, token }) => {
  const [list, setList] = useState([]);
  const [nameUser, setNameUser] = useState("");

  function setName() {
    user.map((ele) => setNameUser(ele.user.name));
  }

  function loadTechs() {
    user.map((ele) => setList(ele.user.techs));
  }

  useEffect(() => {
    loadTechs();
    setName();
  }, []);

  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    status: yup
      .string()
      .required("campos válidos : Iniciante/Intermediário/Avançado/"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = ({ title, status }) => {
    api
      .post(
        "/users/techs",
        {
          title: title,
          status: status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => setList([...list, response.data]))
      .catch((err) => console.err);
  };

  const removeList = (removedItem) => {
    let filtered = list.filter((ele) => {
      return ele.id !== removedItem;
    });

    return setList([...filtered]);
  };

  const handleRemoveTech = (id) => {
    api
      .delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => removeList(id))
      .catch((err) => console.err);
  };

  const handleLogout = () => {
    return localStorage.clear();
  };
  if (!authenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <Container>
      <p>
        Olá <span>{nameUser} </span>, seja bem-vindo (a) !!!
      </p>
      <p>
        Insira abaixo Tecnologia desejada e Status apenas nos níveis :
        <span> Iniciante/Intermediário/Avançado </span> .
      </p>
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
        {list.map((ele) => (
          <Card
            title={ele.title}
            status={ele.status}
            onClick={() => handleRemoveTech(ele.id)}
          ></Card>
        ))}
      </TasksContainer>
      <Button onClick={handleLogout()}> Sair </Button>
    </Container>
  );
};

export default Dashboard;
