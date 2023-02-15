import { toast } from "react-toastify"
import { FormData } from "../Login"

type FetchUserId = (data: FormData) => Promise<string>

export const fetchUserId: FetchUserId = async (data) => {
  try {
    const userIdResponse = await fetch("/api/skoob/login", {
      method: "POST",
      body: JSON.stringify(data),
    })
    const { userId } = await userIdResponse.json()
    return userId
  } catch (error) {
    toast.error("Algo deu errado, cheque suas credenciais e tente novamente.")
  }
}