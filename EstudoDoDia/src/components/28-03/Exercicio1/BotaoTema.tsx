import { useTheme } from "./contexts/ThemeContext";

function BotaoTema() {
  const { theme, toggle } = useTheme();
  return (
    <div>
      <button onClick={toggle}>
        {theme === "light" ? "Ligar dark Theme" : "Ligar light theme"}
      </button>
    </div>
  );
}

export default BotaoTema;
