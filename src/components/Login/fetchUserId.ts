import { toast } from "react-toastify"
import { FormData } from "../Login"

type FetchUserId = (data: FormData) => Promise<string | undefined>

const notifyError = () =>
  toast.error("Algo deu errado, cheque suas credenciais e tente novamente.", {
    autoClose: false,
  })

export const fetchUserId: FetchUserId = async (data) => {
  try {
    const userIdResponse = await fetch("/api/skoob/login", {
      method: "POST",
      body: JSON.stringify(data),
    })

    if (!userIdResponse.ok) {
      notifyError()
    }

    const { userId } = await userIdResponse.json()
    return userId
  } catch (error) {
    notifyError()
    return
  }
}
