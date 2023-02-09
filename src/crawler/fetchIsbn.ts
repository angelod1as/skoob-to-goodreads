import { SKOOB_URL } from "@/helpers/constants"
import { Crawler } from "./crawler"

type FetchIsbnProps = {
  url: string
  page: Crawler["page"]
}

export const fetchIsbn = async ({ url, page }: FetchIsbnProps) => {
  await page.goto(`${SKOOB_URL}${url}`, {
    waitUntil: "networkidle0",
  })

  const ISBN = await page.evaluate(() => {
    const el: HTMLMetaElement | null = document.head.querySelector(
      'meta[property="books:isbn"]',
    )

    if (el?.content) {
      return el.content
    }

    return ""
  })

  return ISBN
}
