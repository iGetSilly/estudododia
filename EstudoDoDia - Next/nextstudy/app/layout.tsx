import "./globals.css";
import Link from "next/link";
import Providers from "./providers";
import { CartProvider } from "./context/CartContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <CartProvider>
        <Providers>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/users">Usuarios</Link>
            <Link href="/albums">Albums</Link>
            <Link href="/revision/30-04">Tarefas</Link>
          </nav>
          <main>{children}</main>
        </Providers>
        </CartProvider>
      </body>
    </html>
  )
}
