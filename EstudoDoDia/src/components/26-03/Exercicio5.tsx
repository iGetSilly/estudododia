import { useEffect, useState } from "react"

// Busca a lista de todos os todos (tarefas) e mostra na tela.
// Adiciona dois botões de filtro: "Todas", "Concluídas" e "Pendentes". O filtro acontece no frontend sem novo fetch.
// URL: https://jsonplaceholder.typicode.com/todos

interface Todos {
    id: number,
    title: string,
    completed: boolean
}

function Exercicio5() {
    const [todos, setTodos] = useState<Todos[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string>("")
    const [filtro, setFiltro] = useState<"Todas" | "concluidas" | "pendentes">("Todas")
    const listaFiltrada = filtro === "Todas" ? todos : filtro === "concluidas" ? todos.filter((item) => item.completed) : todos.filter((item => !item.completed))

    

    useEffect(() => {
        setLoading(true)
        setError("")
        const buscar = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/todos")
                if(!response.ok) throw new Error("Erro na requisição")
                const data: Todos[] = await response.json()
                setTodos(data)
            } catch (err) {
                setError(err instanceof Error ? err.message : "Error")
            } finally {
                setLoading(false)
            }
        }
        buscar()
    }, [])

    if(loading) return <p>Carregando...</p>

    if(error) return <p>{error}</p>

  return (
      <div>
        <button onClick={() => setFiltro("Todas")}>Todas</button>
        <button onClick={() => setFiltro("concluidas")}>Concluidas</button>
        <button onClick={() => setFiltro("pendentes")}>Pendentes</button>
        <ul>
            {listaFiltrada.map((item) => (
                <li key={item.id}>{item.title}</li>
            ))}
        </ul>
    </div>
  )
}

export default Exercicio5