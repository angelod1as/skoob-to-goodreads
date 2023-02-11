import React from "react"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { Intro } from "./Intro"
import { Login } from "./Login"

export const Home = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center w-full h-full gap-8 p-4 bg-beige-body">
        <Intro />
        <Login />
      </main>
      <Footer />
    </>
  )
}
