import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

// Agora integra com fetch. Crie um formulário de login que:

// Campos: email e senha com validação Zod
// Ao submeter, faz um POST para:

// https://jsonplaceholder.typicode.com/posts

// Enquanto envia, o botão mostra "Carregando..." e fica desabilitado
// Se der sucesso, mostra "Login realizado com sucesso!"
// Se der erro, mostra "Erro ao realizar login"

const loginSchema = z
  .object({
    email: z.email("Email inválido"),
    senha: z.string().min(8, "A senha deve conter pelo menos 8 caracteres!"),
    confirmarSenha: z.string(),
  })
  .refine((data) => data.senha === data.confirmarSenha, {
    message: "As senhas não conferem",
    path: ["confirmarSenha"],
  });

type LoginForm = z.infer<typeof loginSchema>;

function Exercicio3() {
  const [error, setError] = useState<string>("");
  const [sucesso, setSucesso] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>({ resolver: zodResolver(loginSchema) });

  const onSubmit = async (data: LoginForm) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      );
      if (!response.ok) {
        throw new Error("Erro na requisição");
      }

      const result = await response.json();
      console.log("Login realizado com sucesso!", result);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error");
    } finally {
      setSucesso(true);
    }
  };

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("email")}
        type="text"
        placeholder="Digite seu email"
      />
      {errors.email && <p>{errors.email.message}</p>}
      <input
        {...register("senha")}
        type="password"
        placeholder="Digite sua senha"
      />
      {errors.senha && <p>{errors.senha.message}</p>}
      <input
        {...register("confirmarSenha")}
        type="password"
        placeholder="Confirme sua senha"
      />
      {errors.confirmarSenha && <p>{errors.confirmarSenha.message}</p>}
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Carregando..." : "Enviar"}
      </button>
      {sucesso && <p>Login realizado com sucesso!</p>}
    </form>
  );
}

export default Exercicio3;
