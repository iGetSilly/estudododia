import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

// Crie um formulário de cadastro com três campos: nome, email e senha.
// Regras de validação:

// Nome: mínimo 2 caracteres
// Email: formato válido
// Senha: mínimo 6 caracteres

// Use o exemplo da aula como referência. A estrutura é praticamente a mesma — só muda o schema e os campos.

const loginSchema = z.object({
  name: z.string().min(4, "Mínimo de 4 caracteres"),
  email: z.email("Email inválido"),
  password: z.string().min(8, "Minimo de 8 caracteres"),
});

type LoginForm = z.infer<typeof loginSchema>;

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginForm) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name")}
          type="text"
          placeholder="Digite seu nome"
        />

        {errors.name && <p>{errors.name.message}</p>}

        <input {...register("email")} type="email" placeholder="Email" />

        {errors.email && <p>{errors.email.message}</p>}

        <input
          {...register("password")}
          type="password"
          placeholder="Digite sua senha"
        />

        {errors.password && <p>{errors.password.message}</p>}
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Carregando..." : "Entrar"}
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
