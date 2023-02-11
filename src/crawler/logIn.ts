import { LOGIN_URL } from "@/helpers/constants"
import { Crawler } from "./crawler"

type LogInProps = {
  username: string
  password: string
  page: Crawler["page"]
}

export const logIn = async ({ username, password, page }: LogInProps) => {
  await page.goto(LOGIN_URL)

  await page.type("#UsuarioEmail", username)
  await page.type("#UsuarioSenha", password)

  await page.click(".submit input")

  await page.waitForSelector("#meu_perfil")

  const userId = page.url().split("/").slice(-1).join("").split("-")[0]

  return userId
}
