// Crie um formulário de signup com os seguintes campos e validações:

// Nome: mínimo 2 caracteres
// Email: formato válido
// Senha: mínimo 8 caracteres
// Confirmar senha: deve ser igual à senha

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

const loginSchema = z
  .object({
    name: z.string().min(2, "Nome muito curto!"),
    email: z.email("O email é inválido"),
    senha: z.string().min(8, "A senha deve ter pelo menos 8 caracteres"),
    confirmarSenha: z.string(),
  })
  .refine((data) => data.senha === data.confirmarSenha, {
    message: "Senhas não conferem",
    path: ["confirmarSenha"],
  });

type LoginForm = z.infer<typeof loginSchema>;

function Exercicio2() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>({ resolver: zodResolver(loginSchema) });

  const onSubmit = async (data: LoginForm) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")}type="text"  placeholder="Digite seu nome"/>
        {errors.name && <p>{errors.name.message}</p>}
        <input {...register("email")}type="email"  placeholder="Digite seu email"/>
        {errors.email && <p>{errors.email.message}</p>}
        <input {...register("senha")}type="password"  placeholder="Digite sua senha"/>
        {errors.senha && <p>{errors.senha.message}</p>}
        <input {...register("confirmarSenha")}type="password"  placeholder="Confirme a sua senha"/>
        {errors.confirmarSenha && <p>{errors.confirmarSenha.message}</p>}
        <button type="submit" disabled={isSubmitting}>{isSubmitting ? "Carregando..." : "Entrar"}</button>
    </form>
  );
}

export default Exercicio2;
