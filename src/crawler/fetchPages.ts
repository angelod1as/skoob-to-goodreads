import { LIMIT } from "@/helpers/constants"
import { generateBookcaseUrl } from "@/helpers/generateUrl"

export const fetchPages = async (userId: string) => {
  console.log("Fetching page number")

  console.log("Generating bookcase URL")
  const bookcase = generateBookcaseUrl(userId, 0, 1)

  try {
    console.log("Fetching bookcase")
    const response = await fetch(bookcase)
    const result = await response.json()

    if (!result.success) {
      throw new Error("No bookcase found")
    }

    const total = result.paging.total
    console.log(`Total: ${total}`)
    const pages = Math.ceil(total / LIMIT)
    console.log(`Pages: ${pages}`)

    return { numberOfPages: pages, numberOfBooks: total }
  } catch (error) {
    throw new Error(error as string)
  }
}
