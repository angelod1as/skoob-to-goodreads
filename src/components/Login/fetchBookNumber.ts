import { toast } from "react-toastify"

type FetchBookNumber = (userId: string) => Promise<string>

export const fetchBookNumber: FetchBookNumber = async (userId) => {
  try {
    const bookNumberResponse = await fetch("/api/skoob/bookcase", {
      method: "POST",
      body: JSON.stringify({ userId }),
    })
    const { bookNumber } = await bookNumberResponse.json()
    return bookNumber
  } catch (error) {
    toast.error(
      "Algo deu errado na busca por seus livros. Contate o desenvolvedor ou tente mais tarde.",
    )
  }
}
