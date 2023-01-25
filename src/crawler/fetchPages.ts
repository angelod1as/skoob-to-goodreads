import { LIMIT } from "@/helpers/constants"
import { generateBookcaseUrl } from "@/helpers/generateUrl"

export const fetchPages = async (userId: string) => {
  const bookcase = generateBookcaseUrl(userId, 0, 1)

  try {
    const response = await fetch(bookcase)
    const result = await response.json()

    if (!result.success) {
      throw new Error("No bookcase found")
    }

    const total = result.paging.total
    const pages = Math.ceil(total / LIMIT)

    return pages
  } catch (error) {
    throw new Error(error as string)
  }
}
