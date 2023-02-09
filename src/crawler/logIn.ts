import { LOGIN_URL } from "@/helpers/constants"
import { Crawler, crawler } from "./crawler"

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
  const userId = page.url().split("/").slice(-1).join("").split("-")[0]

  return userId
}
