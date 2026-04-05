import { useState } from "react";
import { useUser, type User } from "../../../contexts/05-04/userContext";

function LoginForm() {
  const { login } = useUser();
  const [formData, setFormData] = useState<User>({
    name: "",
    email: "",
  });

  const handleSubmit: React.SubmitEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div>
      <form action="submit" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="user">Digite seu nome</label>
          <input
            id="user"
            type="text"
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.currentTarget.value }))
            }
            value={formData.name}
            name="user"
          />
        </div>
        <div>
          <label htmlFor="email">Digite seu Email</label>
          <input
            id="email"
            type="text"
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.currentTarget.value }))
            }
            value={formData.email}
            name="email"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
