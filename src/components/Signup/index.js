import { Background, Container, Content, AnimationContainer } from "./styles";
import Button from "../Button/index";
import { Link, Redirect, useHistory } from "react-router-dom";
import Input from "../../components/Input";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { toast } from "react-toastify";

const Signup = ({ authenticated }) => {
  const schema = yup.object().shape({
    name: yup
      .string()
      .required("campo obrigatório")
      .matches(/[a-zA-Z\u00C0-\u00FF ]+/i, "deve conter apenas letras"),
    email: yup.string().email("email inválido").required("campo obrigatório"),
    bio: yup.string(),
    contact: yup.string(),
    course_module: yup.string(),
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

  const onSubmitFunction = ({
    name,
    email,
    password,
    bio,
    contact,
    course_module,
  }) => {
    const user = { name, email, password, bio, contact, course_module };

    console.log(user);

    api
      .post("/users", user)
      .then((_) => {
        toast.success("Sucesso ao criar a conta");
        return history.push("/login");
      })
      .catch((err) => toast.error("Erro ao criar a conta , tente outro email"));
  };

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h1>Cadastro</h1>
            <Input
              register={register}
              name="name"
              icon={FiUser}
              label="Nome"
              placeholder="Seu nome"
              error={errors.name?.message}
            />
            <Input
              register={register}
              name="email"
              icon={FiMail}
              label="Email"
              placeholder=" Seu melhor email"
              error={errors.email?.message}
            />
            <Input
              register={register}
              name="bio"
              icon={FiMail}
              label="bio"
              placeholder=" bio"
              error={errors.bio?.message}
            />
            <Input
              register={register}
              name="contact"
              icon={FiMail}
              label="contact"
              placeholder="contact"
              error={errors.contact?.message}
            />
            <Input
              register={register}
              name="course_module"
              icon={FiMail}
              label="couser_module"
              placeholder="course_module"
              error={errors.course_module?.message}
            />
            <Input
              register={register}
              name="password"
              icon={FiLock}
              type="password"
              label="Senha"
              placeholder="Uma senha bem segura "
              error={errors.password?.message}
            />
            <Input
              register={register}
              name="passwordConfirm"
              icon={FiLock}
              type="password"
              label="Confirmacao de senha"
              placeholder=" Confirme  sua senha "
              error={errors.passwordConfirm?.message}
            />
            <Button type="submit">Enviar</Button>
            <p>
              Não tem uma conta ? Faça seu <Link to="/login"> Login </Link>
            </p>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default Signup;
