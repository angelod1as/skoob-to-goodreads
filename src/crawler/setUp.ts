import puppeteer, { Browser, Page } from "puppeteer"

export type Crawler = { browser: Browser; page: Page }

type SetUp = () => Promise<Crawler>

export const setUp: SetUp = async () => {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()
  await page.setViewport({ width: 1080, height: 1024 })

  return { browser, page }
}
