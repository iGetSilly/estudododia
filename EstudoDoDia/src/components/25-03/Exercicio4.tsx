import React, { useEffect, useState } from 'react'

// Crie um componente com um input de nome. Toda vez que o nome mudar, salve no localStorage.
// Quando o componente carregar, leia o localStorage e preencha o input com o valor salvo.
// Duas operações, dois useEffects separados.
// OBS: Resolvido com somente um useEffect por causa do lazy init

function Exercicio4() {
    const [text, setText] = useState<string>(() => {
        return localStorage.getItem("name") || ""
    })

    useEffect(() => {
        localStorage.setItem("name", text)
    }, [text])

  return (
    <div><input type="text"  name='name' value={text} onChange={(e) => setText(e.target.value)}/></div>
  )
}

export default Exercicio4