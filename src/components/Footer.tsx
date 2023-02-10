import React from "react"
import { Link } from "./Link"

export const Footer = () => {
  return (
    <footer className="absolute bottom-0 left-0 w-full px-4 py-2 text-center">
      <div className="flex flex-col items-center justify-center text-sm">
        <p>
          <b>Skoob 2 Goodreads</b> é um projeto{" "}
          <Link href="https://github.com/angelod1as/skoob-to-goodreads">
            Open Source
          </Link>{" "}
          de <Link href="https://angelodias.com.br/">Angelo Dias</Link>.
        </p>
        <p>
          Ele foi inspirado por{" "}
          <Link href="https://skoob-exporter.colabs.dev/">Skoob Exporter</Link>,
          de{" "}
          <Link href="https://twitter.com/artur_caliendo">Arthur Caliendo</Link>
          .{" "}
        </p>
      </div>
    </footer>
  )
}
