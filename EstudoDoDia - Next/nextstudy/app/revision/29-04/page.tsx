"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

const schema = z
  .object({
    username: z.string().min(5, "O nome deve conter pelo menos 5 caracteres"),
    email: z.email("Email inválido"),
    password: z.string().min(8, "A senha deve conter pelo menos 8 caracteres"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Senhas não coincidem",
    path: ["confirmPassword"],
  });

type FormData = z.infer<typeof schema>;

export default function RHFZod() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("username")} placeholder="Nome" />
      {errors.username && <p>{errors.username.message}</p>}
      <input {...register("email")} placeholder="Email" />
      {errors.email && <p>{errors.email.message}</p>}
      <input {...register("password")} placeholder="Senha" />
      {errors.password && <p>{errors.password.message}</p>}
      <input
        {...register("confirmPassword")}
        placeholder="Confirma sua Senha"
      />
      {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Enviando..." : "Cadastrar"}
      </button>
    </form>
  );
}
