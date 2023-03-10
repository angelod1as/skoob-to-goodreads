import React from "react"
import { Link } from "./Link"

export const Header = () => {
  return (
    <nav className="sticky top-0 left-0 flex justify-between w-full p-4 border border-opacity-10 bg-beige-header">
      <div>
        <Link href="/" inner className="hover:opacity-50">
          <h1 className="text-xl font-light">
            <span>Skoob</span>
            <span className="font-bold">2</span>Goodreads
          </h1>
        </Link>
      </div>
      <div className="flex gap-4">
        <Link href="/como-usar" inner>
          Como usar
        </Link>
        <Link href="/colophon" inner>
          Colophon
        </Link>
      </div>
    </nav>
  )
}
