import { useState } from 'react'

// Crie um componente com um select de cores: vermelho, verde, azul. Abaixo do select, mostre o texto "Você selecionou: X" com a cor escolhida.

type Cores = "Vermelho" | "Verde" | "Azul"

function Exercicio1() {
  const [cores, setCores] = useState<Cores | "Todas">("Todas")

  return (
    <div>
      <select name="Cores" value={cores} onChange={(e) => setCores(e.target.value as Cores | "Todas")}>
        <option value="Todas">Todas</option>
        <option value="Vermelho">Vermelho</option>
        <option value="Verde">Verde</option>
        <option value="Azul">Azul</option>
      </select>
      <p>Voce selecionou a cor: {cores}</p>
    </div>
  )
}

export default Exercicio1