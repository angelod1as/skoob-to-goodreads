import { crawler } from "@/crawler/crawler"
import { generateCSV } from "@/crawler/generateCSV"
import { getBooks } from "@/crawler/getBooks"
import type { NextApiRequest, NextApiResponse } from "next"
// @ts-ignore
import ow from "ow"

type Data = string

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { userId } = JSON.parse(req.body)
  ow(userId, ow.string)

  // Start crawler
  const { page } = await crawler.up()

  const books = await getBooks({ userId, page })

  // Close crawler before ending
  await crawler.down(page)

  const CSV = await generateCSV(books)
  const filename = "books.csv"

  try {
    res
      .status(200)
      .setHeader("Content-Type", "text/csv")
      .setHeader("Content-Disposition", `attachment; filename=${filename}`)
      .send(CSV)
  } catch (error) {
    res.status(400)
  }
}
