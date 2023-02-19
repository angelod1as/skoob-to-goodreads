import React from "react"
import { Link } from "./Link"

export const Intro = () => {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h2 className="text-2xl">
          Transfira seus livros do Skoob para o Goodreads
        </h2>
      </div>
      <div>
        <h3 className="mb-2 text-xl">Como usar:</h3>
        <ol className="flex flex-col gap-1 list-decimal list-inside">
          <li>
            Insira seu email e senha do Skoob abaixo
            <br /> (Nós não guardamos nenhum dado.{" "}
            <Link href="/como-funciona" inner>
              Leia mais
            </Link>
            )
          </li>
          <li>Clique em Enviar</li>
          <li>Aguarde um pouquinho</li>
          <li>
            Importe o arquivo gerado no GoodReads
            <br />
            <Link href="/passo-a-passo" inner>
              Clique aqui para um tutorial mais detalhado
            </Link>
          </li>
        </ol>
      </div>
    </div>
  )
}
