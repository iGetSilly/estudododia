import { useState } from 'react'
import { useUser } from './contexts/userContext'

function LoginForm() {
    const {login, logout} = useUser()
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
  return (
    <div>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <button onClick={() => login(name, email)}>Login</button>
        <button onClick={logout}>Logout</button>
    </div>
  )
}

export default LoginForm