import { crawler } from "@/crawler/crawler"
import { getBooks } from "@/crawler/getBooks"
import { logIn } from "@/crawler/logIn"
import { GoodreadsBook } from "@/types"
import type { NextApiRequest, NextApiResponse } from "next"
import ow from "ow"

type Data = GoodreadsBook[]

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { username, password } = req.body
  ow(username, ow.string)
  ow(password, ow.string)

  // Start crawler
  const { page } = await crawler.up()

  const userId = await logIn({ username, password, page })
  const books = await getBooks({ userId, page, res })
  // const books = await getBooks({ userId: "392145", page, res })

  // TODO: Progress bar
  // TODO: Return books JSON for CSV

  // Close crawler before ending
  await crawler.down(page)

  res.status(200).json(books)
}
