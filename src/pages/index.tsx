import { Home } from "@/components/Home"
import Head from "next/head"
import { Toaster } from "react-hot-toast"

export default function Index() {
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
      <Home />
      <Toaster />
    </>
  )
}
