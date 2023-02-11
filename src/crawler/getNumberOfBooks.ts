import { fetchPages } from "./fetchPages"

type GetBooksProps = {
  userId: string
}

export const getNumberOfBooks = async ({ userId }: GetBooksProps) => {
  const { numberOfBooks } = await fetchPages(userId)
  return numberOfBooks
}
