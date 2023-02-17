import { toast } from "react-toastify"

type FetchNumberOfBooks = (userId: string) => Promise<number | undefined>

const notifyError = () =>
  toast.error(
    "Algo deu errado na busca por seus livros. Contate o desenvolvedor ou tente mais tarde.",
    {
      autoClose: false,
    },
  )

export const fetchNumberOfBooks: FetchNumberOfBooks = async (userId) => {
  try {
    const numberOfBooksResponse = await fetch("/api/skoob/bookcase", {
      method: "POST",
      body: JSON.stringify({ userId }),
    })

    if (!numberOfBooksResponse.ok) {
      notifyError()
    }

    const { numberOfBooks } = await numberOfBooksResponse.json()
    return numberOfBooks
  } catch (error) {
    notifyError()

    return
  }
}
