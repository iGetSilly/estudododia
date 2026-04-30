import SearchForm from "./SearchForm";

interface Props {
  searchParams: Promise<{ q?: string }>;
}

export default async function Page({ searchParams }: Props) {
  const { q } = await searchParams;

  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: { id: number; name: string }[] = await res.json();

  const filtrados = q
    ? users.filter((p) => p.name.toLowerCase().includes(q.toLowerCase()))
    : users;

  return (
    <div>
      <h1>Usuarios</h1>
      <SearchForm />
      <ul>
        {filtrados.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
