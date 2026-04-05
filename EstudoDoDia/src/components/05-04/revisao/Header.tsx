import { useUser } from '../../../contexts/05-04/userContext'

function Header() {
    const { logout } = useUser()
  return (
    <div><button onClick={logout}>logOut</button></div>
  )
}

export default Header