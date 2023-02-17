import toast from "react-hot-toast"
type FetchBooks = (userId: string) => Promise<string | undefined>

const notifyError = () =>
  toast.error(
    "Algo deu errado ao gerar sua lista de livros. Contate o desenvolvedor ou tente mais tarde",
    {
      duration: 10000,
    },
  )

export const fetchBooks: FetchBooks = async (userId) => {
  try {
    const books = await fetch("/api/skoob", {
      method: "POST",
      body: JSON.stringify({ userId }),
    })

    if (!books.ok) {
      notifyError()
    }

    const booksBlob = await books.blob()

    var objectUrl = URL.createObjectURL(booksBlob)

    return objectUrl
  } catch (error) {
    notifyError()
  }
}
