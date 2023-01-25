import { LIMIT } from "@/helpers/constants"
import { generateBookcaseUrl } from "@/helpers/generateUrl"
import { GoodreadsBook, SkoobBook } from "@/types"
import { fetchPages } from "./fetchPages"
import { getIsbn } from "./getIsbn"

type GetBooksProps = {
  userId: string
}

export const getBooks = async ({ userId }: GetBooksProps) => {
  // get books number:
  const pages = await fetchPages(userId)

  const books = [...Array(pages)].map(async (_, index) => {
    const it = await fetchBooks({ page: index + 1, userId })
  })

  return
}

type FetchBooksProps = {
  page: number
  userId: string
}
const fetchBooks = async ({ page, userId }: FetchBooksProps) => {
  const bookcase = generateBookcaseUrl(userId, page, LIMIT)

  try {
    const response = await fetch(bookcase)
    const result = await response.json()

    if (!result.success) {
      throw new Error("No bookcase found")
    }

    const books: SkoobBook[] = result.response

    const it = books.map((book) => {
      const edition = book.edicao

      const abc: GoodreadsBook = {
        Title: edition.titulo,
        Author: edition.autor,
        ISBN: getIsbn(edition.url),
      }
    })

    return {
      title: books,
    }
  } catch (error) {
    throw new Error(error as string)
  }
}
