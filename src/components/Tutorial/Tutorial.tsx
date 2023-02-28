import Image from "next/image"
import React from "react"
import { Link } from "../Link"
import { Section, Title, Subtitle, OL, UL, Figure } from "../Typography"
import img1 from "./1.png"
import img2 from "./2.png"
import img3 from "./3.png"
import img4 from "./4.png"
import img5 from "./5.png"
import img6 from "./6.png"
import img7 from "./7.png"

// TODO: ALT TAGS

export const Tutorial = () => {
  return (
    <div className="flex flex-col gap-4 py-8">
      <Title>Como usar</Title>

      <Section>
        <Subtitle>Login</Subtitle>
        <OL>
          <li>Vá a página inicial</li>
          <li>
            Insira seu login e senha do Skoob.{" "}
            <Link href="colophon">Nós não guardamos nenhum dado seu.</Link>
            <Figure>
              <Image src={img1} alt="" />
            </Figure>
          </li>
          <li>Fique atento às notificações.</li>
          <UL className="ml-4">
            <li>Se algo der errado, uma mensagem de erro vai aparecer</li>
            <Figure>
              <Image src={img2} alt="" />
            </Figure>
            <li>
              Se o login der certo, você verá uma mensagem com o tempo estimado
              de duração da exportação
            </li>
            <Figure>
              <Image src={img3} alt="" />
            </Figure>
          </UL>
        </OL>
      </Section>

      <hr />

      <Section>
        <Subtitle>Exportando a lista de livros</Subtitle>
        <OL>
          <li>Aguarde pacientemente o processo.</li>
          <li>
            Um arquivo <code>.CSV</code> será baixado em seu computador
          </li>
        </OL>
      </Section>

      <hr />

      <Section>
        <Subtitle>Importando no Goodreads</Subtitle>
        <OL>
          <li>
            Acesse o <Link href="https://www.goodreads.com">Goodreads</Link> e
            faça login
          </li>
          <Figure>
            <Image src={img4} alt="" />
          </Figure>
          <li>
            Na aba{" "}
            <Link href="https://www.goodreads.com/review/list/141444567?ref=nav_mybooks">
              My Books
            </Link>
            , clique em{" "}
            <Link href="https://www.goodreads.com/review/import">
              Import and Export
            </Link>
          </li>
          <Figure>
            <Image src={img5} alt="" />
          </Figure>
          <li>Clique no botão &quot;Import Books&quot;</li>
          <Figure>
            <Image src={img6} alt="" />
          </Figure>
          <li>Selecione o arquivo exportado por nosso site</li>
          <li>Aguarde a importação no Goodreads</li>
        </OL>
      </Section>

      <hr />
      <Section>
        <Subtitle>Possíveis problemas</Subtitle>
        <UL>
          <li>
            Se algum livro não puder ser importado, o Goodreads irá te avisar e
            você precisará adicionar a publicação manualmente
          </li>
          <Figure>
            <Image src={img7} alt="" />
          </Figure>
        </UL>
      </Section>
    </div>
  )
}
