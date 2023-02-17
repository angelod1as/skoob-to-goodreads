import { ToastContainer } from "react-toastify"
import { Lato } from "@next/font/google"
import "@/styles/globals.css"
import "react-toastify/dist/ReactToastify.css"
import type { AppProps } from "next/app"

const lato = Lato({
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ToastContainer
        autoClose={false}
        progressStyle={{
          background: "rgba(244, 241, 234, 1)", // Beige Header
        }}
      />
      <style jsx global>{`
        html {
          font-family: ${lato.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
