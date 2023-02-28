import React from "react"
import { Link } from "./Link"
import { Section, Subtitle, Title, UL } from "./Typography"

export const Colophon = () => {
  return (
    <div className="flex flex-col gap-4 py-8">
      <Title>Colophon</Title>

      <Section>
        <Subtitle>Inspiração</Subtitle>
        <p>
          Este projeto foi inspirado no{" "}
          <Link href="https://skoob-exporter.colabs.dev/">Skoob Exporter</Link>.
          Não temos a intenção de substituí-lo, só de oferecer uma versão dele
          em Typescript ao invés de Ruby — linguagem do projeto original.
        </p>
        <p>
          Este projeto não tem fins lucrativos — assim como o Skoob Exporter.
        </p>
      </Section>

      <Section>
        <Subtitle>Open Source</Subtitle>
        <p>
          Este projeto tem código aberto e é distribuído sob a licensa{" "}
          <Link href="https://www.gnu.org/licenses/gpl-3.0.en.html">
            GNU General Public License V3
          </Link>
          .
        </p>
        <p>
          Você pode acessar o código desse projeto e fazer sugestões para sua
          melhoria no{" "}
          <Link href="https://github.com/angelod1as/skoob-to-goodreads">
            GitHub
          </Link>{" "}
          do projeto.
        </p>
      </Section>
      <Section>
        <Subtitle>Tecnologias utilizadas</Subtitle>
        <p>
          Este website está publicado na <Link href="vercel.com/">Vercel</Link>{" "}
          e foi construído utilizando o framework{" "}
          <Link href="https://nextjs.org/">NextJS</Link>. Ele foi escrito em
          Typescript e utiliza Puppeteer para obter os dados que o Skoob não
          oferece via API.
        </p>
      </Section>
      <Section>
        <Subtitle>O que acontece atrás dos panos</Subtitle>
        <UL>
          <li>O usuário insere seus dados na página inicial;</li>
          <li>
            Acessamos o Skoob via Puppeteer — uma ferramenta de acesso
            automático a webpages ;
          </li>
          <li>Logamos no Skoob como os dados coletados;</li>
          <li>Capturamos o ID de usuário;</li>
          <li>
            Fechamos a instância do Puppeteer —{" "}
            <b>o que apaga o usuário e senha captados anteriormente</b>;
          </li>
          <li>
            (Como visto acima, não salvamos esses dados e o desenvolvedor não
            tem acesso à eles) ;
          </li>
        </UL>
        <p>
          Após capturarmos o ID de usuário, usamos a API do Skoob para baixar a
          lista de livros adicionados pelo usuário — que é então convertida para
          um formato aceito pelo Goodreads.
        </p>
        <p>
          O arquivo final, baixado pelo usuário, pode ser utilizado na
          ferramenta de importação do Goodreads.
        </p>
      </Section>
    </div>
  )
}
