import React from "react"
import { Link } from "./Link"

export const Login = () => {
  return (
    <div className="flex flex-col max-w-lg gap-4 text-center">
      <p>Transfira já seus livros do Skoob para o Goodreads</p>
      <p>
        Nosso site não guarda <span>nenhuma</span> informação dos usuários —
        você pode checar o código no <Link href="">GitHub</Link> para ter
        certeza.
      </p>
    </div>
  )
}
