import puppeteer, { Browser, Page } from "puppeteer"

export type Crawler = { browser: Browser; page: Page }

type CrawlerProps = {
  up: () => Promise<Crawler>
  down: (page: Page) => Promise<void>
}

export type ErrorMessage = {
  error: string
}

export const crawler: CrawlerProps = {
  up: async () => {
    const browser = await puppeteer.launch({ headless: true })
    const page = await browser.newPage()
    await page.setViewport({ width: 1080, height: 1024 })

    return { browser, page }
  },
  down: async (page: Page) => {
    page.close()
  },
}
