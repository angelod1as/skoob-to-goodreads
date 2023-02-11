import { LOGIN_URL } from "@/helpers/constants"
import { Crawler } from "./crawler"

type LogInProps = {
  username: string
  password: string
  page: Crawler["page"]
}

export const logIn = async ({ username, password, page }: LogInProps) => {
  console.log("Navigating to Login page")
  await page.goto(LOGIN_URL)

  console.log("Logging in")
  await page.type("#UsuarioEmail", username)
  await page.type("#UsuarioSenha", password)

  await page.click(".submit input")
  console.log("Submitted login")

  console.log("Page URL: ", page.url)

  await page.waitForSelector("#meu_perfil")

  console.log("Page URL: ", page.url)

  console.log("Getting userId")
  const userId = page.url().split("/").slice(-1).join("").split("-")[0]
  console.log(`userId: ${userId}`)

  return userId
}
