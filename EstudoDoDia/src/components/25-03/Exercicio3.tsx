import React, { useState, type ChangeEvent } from "react";

// Agora junta os dois conceitos: formulário para adicionar produtos à lista + filtro por categoria.

// Input para o nome
// Select para escolher a categoria do produto
// Botão adicionar
// Select de filtro separado
// Lista filtrada derivada do estado

type Categoria = "Eletronico" | "Roupa" | "Outros";

interface Produto {
  id: string;
  name: string;
  categoria: Categoria;
}

function Exercicio3() {
  const [form, setForm] = useState({
    name: "",
    categoria: "eletronico" as Categoria,
  });
  const [list, setList] = useState<Produto[]>([]);
  const [filtro, setFiltro] = useState<Categoria | "Todas">("Todas");

  const listaFiltrada =
    filtro === "Todas"
      ? list
      : list.filter((item) => item.categoria === filtro);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAdd = (produto: string, categoria: Categoria) => {
    const novoProduto: Produto = {
      id: crypto.randomUUID(),
      name: produto,
      categoria: categoria,
    };

    setList((prev) => [...prev, novoProduto]);
  };

  const handleSubmit: React.SubmitEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    handleAdd(form.name, form.categoria);
    setForm({ name: "", categoria: "Eletronico" });
  };

  return (
    <div>
      <form action="submit" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Digite o nome do produto: </label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={form.name}
          />
          <select
            name="Produto"
            value={form.categoria}
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                categoria: e.target.value as Categoria,
              }))
            }
          >
            <option value="Todas">Todas</option>
            <option value="Eletronico">Eletronico</option>
            <option value="Roupa">Roupa</option>
            <option value="Outros">Outros</option>
          </select>
        </div>
        <button>
          Adicionar
        </button>
      </form>
      <select name="ListaFiltrada" value={filtro} onChange={(e) =>setFiltro(e.target.value as Categoria | "Todas")}>
        <option value="Todas">Todas</option>
        <option value="Eletronico">Eletronico</option>
        <option value="Roupa">Roupa</option>
        <option value="Outros">Outros</option>
      </select>
      <ul>
        {listaFiltrada.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Exercicio3;
