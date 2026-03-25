import React, { useState } from "react";

// Crie uma lista de produtos com um select de filtro por categoria. Cada produto tem nome e categoria. O filtro tem a opção "todas" mais as categorias existentes.

type Categoria = "eletronico" | "roupa" | "alimento";

interface Produto {
  id: string;
  nome: string;
  categoria: Categoria;
}

function Exercicio2() {
  const produtos: Produto[] = [
    { id: "1", nome: "Notebook", categoria: "eletronico" },
    { id: "2", nome: "Camiseta", categoria: "roupa" },
    { id: "3", nome: "Arroz", categoria: "alimento" },
    { id: "4", nome: "Mouse", categoria: "eletronico" },
    { id: "5", nome: "Calça", categoria: "roupa" },
  ];

  const [filtro, setFiltro] = useState<Categoria | "Todas">("Todas")
  const listaFiltrada = filtro === "Todas" ? produtos : produtos.filter((item) => item.categoria === filtro)

  return <div>
    <select name="Produto" value={filtro} onChange={(e) => setFiltro(e.target.value as Categoria | "Todas")}>
        <option value="Todas">Todas</option>
        <option value="eletronico">eletronico</option>
        <option value="roupa">roupa</option>
        <option value="alimento">alimento</option>
    </select>
    <ul>
        {listaFiltrada.map((item) => (
            <li key={item.id}>{item.nome}</li>
        ))}
    </ul>
    </div>;
}

export default Exercicio2;
