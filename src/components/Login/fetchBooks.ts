import { toast } from "react-toastify"

type FetchBooks = (userId: string) => Promise<string | undefined>

export const fetchBooks: FetchBooks = async (userId) => {
  try {
    const books = await fetch("/api/skoob", {
      method: "POST",
      body: JSON.stringify({ userId }),
    })

    const booksBlob = await books.blob()

    var objectUrl = URL.createObjectURL(booksBlob)

    return objectUrl
  } catch (error) {
    toast.error(
      "Algo deu errado ao gerar sua lista de livros. Contate o desenvolvedor ou tente mais tarde",
    )
  }
}
