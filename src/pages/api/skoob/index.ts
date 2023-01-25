import { getBooks } from "@/crawler/getBooks"
import { logIn } from "@/crawler/logIn"
import { setUp } from "@/crawler/setUp"
import type { NextApiRequest, NextApiResponse } from "next"

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { username, password } = req.body

  // TODO: Assert username & password

  // const crawler = await setUp()
  // const userId = await logIn({ username, password, crawler })
  // const books = await getBooks({ userId })
  const books = await getBooks({ userId: "392145" })

  res.status(200).json({ name: "John Doe" })
}
