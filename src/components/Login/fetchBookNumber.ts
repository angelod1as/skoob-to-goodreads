import { toast } from "react-toastify"

type FetchBookNumber = (userId: string) => Promise<string | undefined>

const notifyError = () =>
  toast.error(
    "Algo deu errado na busca por seus livros. Contate o desenvolvedor ou tente mais tarde.",
    {
      autoClose: false,
    },
  )

export const fetchBookNumber: FetchBookNumber = async (userId) => {
  try {
    const bookNumberResponse = await fetch("/api/skoob/bookcase", {
      method: "POST",
      body: JSON.stringify({ userId }),
    })

    if (!bookNumberResponse.ok) {
      notifyError()
    }

    const { bookNumber } = await bookNumberResponse.json()
    return bookNumber
  } catch (error) {
    notifyError()

    return
  }
}
