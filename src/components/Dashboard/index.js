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

const Dashboard = ({ authenticated, user }) => {
  const [token] = useState(
    JSON.parse(localStorage.getItem("@kenzieHub:token")) || ""
  );

  const [tech, setTech] = useState([]);

  function loadTechs() {
    user.map((ele) => setTech(ele.user.techs));
  }

  useEffect(() => {
    loadTechs();
  }, []);

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
      .then((response) => setTech([response.data]))
      .catch((err) => console.err);
  };

  const handleRemoveTech = (removedItem) => {
    let filteredList = tech.filter((ele) => {
      return ele !== removedItem;
    });
    setTech([...filteredList]);
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
        {tech.map((ele) => (
          <Card
            title={ele.title}
            status={ele.status}
            onClick={() => handleRemoveTech(ele)}
          ></Card>
        ))}
      </TasksContainer>
    </Container>
  );
};

export default Dashboard;
