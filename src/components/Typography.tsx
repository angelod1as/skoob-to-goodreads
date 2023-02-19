import Image from "next/image"
import { FC, PropsWithChildren } from "react"

export const Title: FC<PropsWithChildren> = ({ children }) => (
  <h2 className="text-2xl">{children}</h2>
)

export const Subtitle: FC<PropsWithChildren> = ({ children }) => (
  <h3 className="text-xl">{children}</h3>
)

export const OL: FC<PropsWithChildren> = ({ children }) => (
  <ol className="flex flex-col gap-1 list-decimal list-inside">{children}</ol>
)

export const UL: FC<PropsWithChildren & { className?: string }> = ({
  children,
  className = "",
}) => (
  <ul className={`list-disc list-inside flex flex-col gap-1 ${className}`}>
    {children}
  </ul>
)

export const Section: FC<PropsWithChildren> = ({ children }) => (
  <section className="flex flex-col gap-4">{children}</section>
)

export const Figure: FC<PropsWithChildren> = (props) => (
  <figure {...props} className="p-4 my-4 border shadow" />
)
