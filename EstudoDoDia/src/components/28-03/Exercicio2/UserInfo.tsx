import { useUser } from "./contexts/UserContext";

function UserInfo() {
  const { name, email } = useUser();

  if (!name) return <p>Nenhum usuário logado</p>

  return (
    <div>
      <p>
        O usuario está logado: {name}, {email}
      </p>
    </div>
  );
}

export default UserInfo;
