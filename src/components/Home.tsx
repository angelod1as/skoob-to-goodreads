import React from "react"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { Intro } from "./Intro"
import { Login } from "./Login"

export const Home = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center w-full h-full p-4 bg-beige-body">
        <div className="flex flex-col max-w-lg gap-8">
          <Intro />
          <Login />
        </div>
      </main>
      <Footer />
    </>
  )
}
