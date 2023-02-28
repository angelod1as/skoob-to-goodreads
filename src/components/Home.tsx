import React from "react"
import { Intro } from "./Intro"
import { Login } from "./Login"

export const Home = () => {
  return (
    <div className="flex flex-col gap-8">
      <Intro />
      <Login />
    </div>
  )
}
