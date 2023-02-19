import React from "react"
import { Link } from "./Link"

export const Footer = () => {
  return (
    <footer className="sticky bottom-0 left-0 w-full px-4 py-2 text-center border bg-beige-header border-opacity-10">
      <div className="flex flex-col items-center justify-center text-sm">
        <p>
          Este é um projeto{" "}
          <Link href="https://github.com/angelod1as/skoob-to-goodreads">
            Open Source
          </Link>{" "}
          de <Link href="https://angelodias.com.br/">Angelo Dias</Link>{" "}
          inspirado por{" "}
          <Link href="https://skoob-exporter.colabs.dev/">Skoob Exporter</Link>.
        </p>
      </div>
    </footer>
  )
}
