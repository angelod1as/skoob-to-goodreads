import { LOGIN_URL } from "@/helpers/constants"
import { Crawler } from "./crawler"

type LogInProps = {
  username: string
  password: string
  page: Crawler["page"]
}

type LogIn = (props: LogInProps) => Promise<string>

export const logIn: LogIn = async ({ username, password, page }) => {
  await page.goto(LOGIN_URL)

  await page.type("#UsuarioEmail", username)
  await page.type("#UsuarioSenha", password)

  await page.click(".submit input")

  const error = await page.$(".alert")

  console.log(error)

  // if (error) {
  //   console.error("Invalid credentials")
  //   throw new Error("Invalid credentials")
  // }

  await page.waitForSelector("#meu_perfil")

  const userId = page.url().split("/").slice(-1).join("").split("-")[0]

  return userId
}
