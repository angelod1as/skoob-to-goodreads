import { SKOOB_URL, BOOKSHELF_URL } from "./constants"

export const generateBookcaseUrl = (
  userId: string,
  page: number,
  pageLimit: number,
) =>
  SKOOB_URL +
  BOOKSHELF_URL[0] +
  userId +
  BOOKSHELF_URL[1] +
  page.toString() +
  BOOKSHELF_URL[2] +
  pageLimit.toString()

export const generateBookPage = (bookSlug: string) => SKOOB_URL + bookSlug
