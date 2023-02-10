import React, { AnchorHTMLAttributes, PropsWithChildren } from "react"
import NextLink, { LinkProps as NextLinkProps } from "next/link"

type LinkProps = PropsWithChildren<
  AnchorHTMLAttributes<HTMLAnchorElement> & NextLinkProps
> & { inner?: boolean }

export const Link = ({
  inner,
  target = "_blank",
  className,
  ...props
}: LinkProps) => {
  return (
    <NextLink
      {...props}
      target={inner ? undefined : target}
      className={className ?? "underline hover:opacity-50"}
    />
  )
}
