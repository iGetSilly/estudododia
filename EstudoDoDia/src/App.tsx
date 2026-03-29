import "./App.css";
import Exercicio1 from "./components/25-03/Exercicio1";
import Exercicio2 from "./components/25-03/Exercicio2";
import Exercicio3 from "./components/25-03/Exercicio3";
import Exercicio4 from "./components/25-03/Exercicio4";
import Exercicio5 from "./components/25-03/Exercicio5";
import Exercicio6 from "./components/25-03/Exercicio6";
import Exercicio7 from "./components/25-03/Exercicio7";
import Exercicio12603 from "./components/26-03/Exercicio1";
import Exercicio22603 from "./components/26-03/Exercicio2";
import Exercicio32603 from "./components/26-03/Exercicio3";
import Exercicio42603 from "./components/26-03/Exercicio4";
import Exercicio52603 from "./components/26-03/Exercicio5";
import BotaoTema from "./components/28-03/Exercicio1/BotaoTema";
import Header from "./components/28-03/Exercicio1/Header";
import ThemeProvider from "./components/28-03/Exercicio1/contexts/ThemeProvider";
import LoginForm from "./components/28-03/Exercicio2/LoginForm";
import UserInfo from "./components/28-03/Exercicio2/UserInfo";
import UserProvider from "./components/28-03/Exercicio2/contexts/userProvider";

function App() {
  return (
    <>
      <h1>25/03/2026</h1>
      <h3>Exercicio 1</h3>
      <Exercicio1 />
      <h3>Exercicio 2</h3>
      <Exercicio2 />
      <h3>Exercicio 3</h3>
      <Exercicio3 />
      <h3>Exercicio 4</h3>
      <Exercicio4 />
      <h3>Exercicio 5</h3>
      <Exercicio5 />
      <h3>Exercicio 6</h3>
      <Exercicio6 />
      <h3>Exercicio 7</h3>
      <Exercicio7 />
      <h1>26/03/26</h1>
      <h3>Exercicio 1</h3>
      <Exercicio12603 />
      <h3>Exercicio 2</h3>
      <Exercicio22603 />
      <h3>Exercicio 3</h3>
      <Exercicio32603 />
      <h3>Exercicio 4</h3>
      <Exercicio42603 />
      <h3>Exercicio 5</h3>
      <Exercicio52603 />
      <h1>27/03/26</h1>
      <p>
        Estudado somente Teoria, devido ao trabalho de toda sexta. de 12 a 14h
        freela no bar ordinario.
      </p>
      <p>Conteúdo do dia: Context API</p>
      <h1>28/03/26</h1>
      <ThemeProvider>
        <Header></Header>
        <BotaoTema></BotaoTema>
      </ThemeProvider>
      <UserProvider>
        <UserInfo></UserInfo>
        <LoginForm></LoginForm>
      </UserProvider>
    </>
  );
}

export default App;
