import { Background, Container, Content, AnimationContainer } from "./styles";
import Button from "../Button/index";
import { Link, useHistory } from "react-router-dom";
import Input from "../../components/Input";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { toast } from "react-toastify";

const Login = () => {
  const schema = yup.object().shape({
    name: yup
      .string()
      .required("campo obrigatório")
      .matches(/[a-zA-Z\u00C0-\u00FF ]+/i, "deve conter apenas letras"),
    email: yup.string().email("email inválido").required("campo obrigatório"),
    password: yup
      .string()
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Mínimo de 8 caracteres ,1 letra , 1 número e 1 caracter especial"
      )
      .required("campo obrigatório"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "senhas devem coincidir")
      .required("campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const history = useHistory();

  const onSubmitFunction = ({ name, email, password }) => {
    const user = { name, email, password };

    api
      .post("/user/register", user)
      .then((_) => {
        toast.success("Sucesso ao criar a conta");
        return history.push("/login");
      })
      .catch((err) => toast.error("Erro ao criar a conta , tente outro email"));
  };

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h1> Login</h1>

            <Input
              register={register}
              name="email"
              icon={FiMail}
              label="Email"
              placeholder="Email cadastrado"
              error={errors.email?.message}
            />
            <Input
              register={register}
              name="password"
              icon={FiLock}
              type="password"
              label="Senha"
              placeholder="Senha cadastrada"
              error={errors.password?.message}
            />

            <Button type="submit">Enviar</Button>
            <p>
              Não tem uma conta ? Faça seu <Link to="/signup"> Cadastro </Link>
            </p>
          </form>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};

export default Login;
