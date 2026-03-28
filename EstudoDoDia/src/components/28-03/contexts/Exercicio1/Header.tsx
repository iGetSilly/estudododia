import { useTheme } from './ThemeContext'

function Header() {
    const {theme} = useTheme()
  return (
    <div>O tema usado é: {theme}</div>
  )
}

export default Header