import { useState } from 'react'

type Cores = "Vermelho" | "Verde" | "Azul"

function EstudoDoDia() {
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

export default EstudoDoDia