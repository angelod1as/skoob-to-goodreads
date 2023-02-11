import { crawler } from "@/crawler/crawler"
import { getBooks } from "@/crawler/getBooks"
import { getNumberOfBooks } from "@/crawler/getNumberOfBooks"
import { GoodreadsBook } from "@/types"
import type { NextApiRequest, NextApiResponse } from "next"
// @ts-ignore
import ow from "ow"

type Data = { numberOfBooks: number }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { userId } = JSON.parse(req.body)
  ow(userId, ow.string)

  const numberOfBooks = await getNumberOfBooks({ userId })

  res.status(200).json({ numberOfBooks })
}
