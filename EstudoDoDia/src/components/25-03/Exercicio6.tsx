import { useEffect, useState } from 'react'

// Crie um componente com um timer que conta segundos na tela.
// Deve ter um botão para pausar e retomar. Quando pausado, o timer para. Quando retomado, continua de onde parou.
// Você vai precisar de:

// setInterval com cleanup
// Um estado para saber se está pausado ou não

function Exercicio6() {
    const [count, setCount] = useState<number>(0)
    const [pausado, setPausado] = useState<boolean>(true)

    useEffect(() => {
        if (pausado) return

        const id = setInterval(() => {
            setCount(prev => prev + 1)
        }, 1000)

        return () => clearInterval(id)

    },[pausado])
  return (
    <div>{count}
    <button onClick={() => setPausado(!pausado)}>{pausado ? "Play" : "Pausar"}</button>
    </div>
  )
}

export default Exercicio6