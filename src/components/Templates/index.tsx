import Head from "next/head"
import React, { FC, PropsWithChildren } from "react"
import { Footer } from "../Footer"
import { Header } from "../Header"

type TemplateProps = PropsWithChildren & {
  title?: string
  description: string
}

export const Template: FC<TemplateProps> = ({
  children,
  title,
  description,
}) => {
  const headTitle = `${title ? `${title} - ` : ""}Skoob 2 Goodreads`

  return (
    <div className="flex flex-col h-full">
      <Head>
        <title>{headTitle}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex flex-col items-center justify-center flex-1 w-full px-4 bg-beige-body">
        <div className="max-w-lg">{children}</div>
      </main>
      <Footer />
    </div>
  )
}
