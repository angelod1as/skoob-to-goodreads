import React from "react"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { Login } from "./Login"

export const IndexPage = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center w-full h-full p-4 bg-beige-body">
        <Login />
      </main>
      <Footer />
    </>
  )
}
