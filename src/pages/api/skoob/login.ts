import { crawler } from "@/crawler/crawler"
import { logIn } from "@/crawler/logIn"
import type { NextApiRequest, NextApiResponse } from "next"
// @ts-ignore
import ow from "ow"

type Data = { userId?: string; error?: string }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  console.log("Login route")
  const { username, password } = JSON.parse(req.body)
  ow(username, ow.string)
  ow(password, ow.string)

  console.log("Start crawler")
  const { page } = await crawler.up()

  try {
    console.log("Get userID")
    const userId = await logIn({ username, password, page })

    console.log("Close crawler")
    await crawler.down(page)

    console.log("Returning")
    res.status(200).json({ userId })
  } catch (error: any) {
    console.error("Error!", error.message)

    console.log("Close crawler")
    await crawler.down(page)
    res.status(500).json({ error: error.message })
  }
}
