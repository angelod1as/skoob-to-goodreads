import { crawler } from "@/crawler/crawler"
import { logIn } from "@/crawler/logIn"
import type { NextApiRequest, NextApiResponse } from "next"
// @ts-ignore
import ow from "ow"

type Data = { userId: string }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { username, password } = JSON.parse(req.body)
  ow(username, ow.string)
  ow(password, ow.string)

  // Start crawler
  const { page } = await crawler.up()

  const userId = await logIn({ username, password, page })

  // Close crawler before ending
  await crawler.down(page)

  res.status(200).json({ userId })
}
