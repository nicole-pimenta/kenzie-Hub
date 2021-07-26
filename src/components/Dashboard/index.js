import { Redirect } from "react-router-dom";
import { Container, InputContainer, TasksContainer } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useForm } from "react-hook-form";
import { FiEdit2 } from "react-icons/fi";

import { useEffect, useState } from "react";
import api from "../../services/api";

const Dashboard = ({ authenticated }) => {
  const [userInput, setUserInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const [token] = useState(
    JSON.parse(localStorage.getItem("@kenzieHub:token")) || ""
  );
  const { register, handleSubmit } = useForm();

  if (!authenticated) {
    return <Redirect to="/login" />;
  }

  const addTasks = (userInput) => {
    setTasks([...tasks, userInput]);
    setUserInput("");
  };

  const removeTasks = (removedTask) => {
    let filteredTasks = tasks.filter((ele) => {
      return ele !== removedTask;
    });

    setTasks([...filteredTasks]);
  };

  return (
    <Container>
      <InputContainer>
        <section>
          <Input
            icon={FiEdit2}
            placeholder="Nova Tecnologia"
            register={register}
            name="task"
            value={userInput}
            onChange={(event) => setUserInput(event.target.value)}
          />
          <Button onClick={() => addTasks(userInput)}> Adicionar </Button>
        </section>
      </InputContainer>
      <TasksContainer>
        <ul>
          {tasks.map((ele, index) => {
            return (
              <li key={index}>
                {ele}
                <Button onClick={() => removeTasks(ele)}>
                  {" "}
                  Remover tecnologia
                </Button>
              </li>
            );
          })}
        </ul>
      </TasksContainer>
    </Container>
  );
};

export default Dashboard;
