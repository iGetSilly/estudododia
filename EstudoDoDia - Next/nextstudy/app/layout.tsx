import "./globals.css";
import Link from "next/link";
import Providers from "./providers";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Providers>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/users">Usuarios</Link>
            <Link href="/albums">Albums</Link>
          </nav>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  )
}
