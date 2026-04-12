import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import z from "zod";

interface Post {
  id: number;
  title: string;
  body: string;
}
const postSchema = z.object({
  title: z.string().min(3, "O titulo deve conter pelo menos 3 caracteres"),
  body: z.string().min(10, "O corpo deve conter pelo menos 10 caracteres"),
});

type NovoPost = z.infer<typeof postSchema>;

const criarPost = async (data: NovoPost): Promise<Post> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error("Erro ao criar post");
  return response.json();
};

const buscarPosts = async (): Promise<Post[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) throw new Error("Erro ao buscar posts");
  return response.json();
};

function Exercicio4() {
  const queryClient = useQueryClient();

  const { data: posts } = useQuery({
    queryKey: ["posts"],
    queryFn: buscarPosts,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NovoPost>({ resolver: zodResolver(postSchema) });

  const { mutate, isPending, isSuccess, isError, data } = useMutation({
    mutationFn: criarPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  const onSubmit = (data: NovoPost) => {
    mutate(data);
  };
  
  return (
    <div>
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>
            {post.title}
            <br />
            {post.body}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("title")}
          type="text"
          placeholder="Digite um titulo!"
        />
        <input
          {...register("body")}
          type="text"
          placeholder="Digite o corpo do post"
        />
        <button disabled={isPending}>
          {isPending ? "Criando..." : "CriarPost"}
        </button>
        {errors.body && <p>{errors.body?.message}</p>}
        {errors.title && <p>{errors.title?.message}</p>}
      </form>
      {isSuccess && <p>Post criado com sucesso!</p>}
      {isError && <p>Erro ao criar post</p>}
      <p>{data?.title}</p>
      <p>{data?.body}</p>
    </div>
  );
}

export default Exercicio4;
