import React from "react"
import { Link } from "./Link"

export const Intro = () => {
  return (
    <div className="flex flex-col max-w-lg gap-4 text-center">
      <div>
        <h2>Transfira já seus livros do Skoob para o Goodreads</h2>
        <p>
          Nosso site não guarda <span>nenhuma</span> informação dos usuários —
          você pode checar o código no <Link href="">GitHub</Link> para ter
          certeza.
        </p>
      </div>
      <div>
        <h2>Como usar:</h2>
        <ol>
          <li>Insira seu email e senha do Skoob abaixo</li>
          <li>Clique em Enviar</li>
          <li>Aguarde um pouquinho</li>
          <li>Importe o arquivo gerado no GoodReads</li>
          <li>
            <Link href="/como-funciona" inner>
              Clique aqui para um tutorial mais detalhado
            </Link>
          </li>
        </ol>
      </div>
    </div>
  )
}
