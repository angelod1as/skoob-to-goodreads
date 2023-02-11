import { LIMIT } from "@/helpers/constants"
import { generateBookcaseUrl } from "@/helpers/generateUrl"
import { GoodreadsBook, SkoobBook } from "@/types"
import { fetchIsbn } from "./fetchIsbn"
import { Crawler } from "./crawler"
import { fetchPages } from "./fetchPages"

type GetBooksProps = {
  userId: string
  page: Crawler["page"]
}

export const getBooks = async ({ userId, page }: GetBooksProps) => {
  const { numberOfPages } = await fetchPages(userId)
  const pageCounter = [...Array(numberOfPages)]

  const goodreadsBooks: GoodreadsBook[] = []

  for (const index in pageCounter) {
    const currentPage = parseInt(index) + 1

    console.log(`page ${currentPage} of ${pageCounter.length}`)

    const bookcase = generateBookcaseUrl(userId, currentPage, LIMIT)

    try {
      const response = await fetch(bookcase)
      const result = await response.json()

      if (!result.success) {
        throw new Error("No bookcase found")
      }

      const AllBooks: SkoobBook[] = result.response

      // I use for*in instead of map because of async calls
      for (const element in AllBooks) {
        const book = AllBooks[element]
        const edition = book.edicao

        console.log(`book ${parseInt(element) + 1} of ${AllBooks.length}`)

        const goodreadsBook: GoodreadsBook = {
          Title: edition.titulo,
          Author: edition.autor,
          Publisher: edition.editora,
          ISBN: await fetchIsbn({ page, url: edition.url }),
          "Date Read": book.dt_leitura,
          "My Rating": book.ranking.toString(),
          "Year Published": edition.ano.toString(),
        }

        goodreadsBooks.push(goodreadsBook)
      }
    } catch (error) {
      console.log(":DEV error: ", error)
      throw new Error(error as string)
    }
  }

  return goodreadsBooks
}
