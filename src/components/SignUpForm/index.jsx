import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router";
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { MyForm } from "./styles";

export default function SignUpForm() {
  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().email("E-mail inválido").required("E-mail obrigatório"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 caracteres")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Necessário uma letra, um número e um caracter especial"
      )
      .required("Senha obrigatória"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senha está diferente"),
  });

  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const submitForm = (data) => {
    history.push(`/home/${data.name}`);
  };

  return (
    <MyForm onSubmit={handleSubmit(submitForm)}>
      <TextField
        variant="standard"
        label="Nome"
        helperText={errors.name?.message}
        {...register("name")}
        error={!!errors.name}
      ></TextField>
      <TextField
        variant="standard"
        label="E-mail"
        helperText={errors.email?.message}
        {...register("email")}
        error={!!errors.email}
      ></TextField>
      <TextField
        variant="standard"
        label="Senha"
        type="password"
        helperText={errors.password?.message}
        {...register("password")}
        error={!!errors.password}
      ></TextField>
      <TextField
        variant="standard"
        label="Confirmar Senha"
        type="password"
        helperText={errors.passwordConfirm?.message}
        {...register("passwordConfirm")}
        error={!!errors.passwordConfirm}
      ></TextField>
      <Button variant="outlined" type="submit">
        Cadastrar
      </Button>
    </MyForm>
  );
}
