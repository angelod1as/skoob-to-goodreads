import { ToastContainer } from "react-toastify"
import "@/styles/globals.css"
import "react-toastify/dist/ReactToastify.css"
import type { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ToastContainer
        autoClose={false}
        progressStyle={{
          background: "rgba(244, 241, 234, 1)", // Beige Header
        }}
      />
      <Component {...pageProps} />
    </>
  )
}
