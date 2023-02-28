import edgeChromium from "chrome-aws-lambda"

// Importing Puppeteer core as default otherwise
// it won't function correctly with "launch()"
import puppeteer, { Browser, Page } from "puppeteer-core"

// You may want to change this if you're developing
// on a platform different from macOS.
// See https://github.com/vercel/og-image for a more resilient
// system-agnostic options for Puppeteeer.
const LOCAL_CHROME_EXECUTABLE =
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

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
    console.log("Setting up crawler path")
    const executablePath =
      (await edgeChromium.executablePath) || LOCAL_CHROME_EXECUTABLE
    console.log("Crawler path:", executablePath)

    console.log("Launching Puppeteer")
    const browser = await puppeteer.launch({
      executablePath,
      args: edgeChromium.args,
      headless: true,
    })

    console.log("New page")
    const page = await browser.newPage()
    await page.setViewport({ width: 1080, height: 1024 })

    return { browser, page }
  },
  down: async (page: Page) => {
    page.close()
  },
}
