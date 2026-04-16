import Link from "next/link";

interface Users {
  id: number;
  name: string;
  email: string;
}

interface Props {
  searchParams: Promise<{ query?: string }>;
}

export default async function Users({ searchParams }: Props) {
  const { query } = await searchParams;

  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: Users[] = await response.json();

  const filtrados = query
    ? users.filter((user) =>-
        user.name.toLowerCase().includes(query.toLowerCase()),
      )
    : users;

  return (
    <div>
      <h1>Usuarios</h1>
      <form>
        <input
          name="query"
          defaultValue={query}
          placeholder="Buscar usuarios"
        />
        <button type="submit">Buscar</button>
      </form>
      <ul>
        {filtrados.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
