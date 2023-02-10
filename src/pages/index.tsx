import { IndexPage } from "@/components/indexPage"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>Skoob 2 Goodreads</title>
        <meta
          name="description"
          content="Transferir livros do Skoob para o Goodreads"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <IndexPage />
    </>
  )
}
