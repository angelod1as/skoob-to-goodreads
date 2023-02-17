import React, { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
// import toast from "react-hot-toast"
import { fetchBookNumber } from "./Login/fetchBookNumber"
import { fetchBooks } from "./Login/fetchBooks"
import { fetchUserId } from "./Login/fetchUserId"
import { toast } from "react-toastify"

export type FormData = {
  username: string
  password: string
}

type InputData = {
  label: string
  type: string
  placeholder: string
  name: keyof FormData
}

const inputs: InputData[] = [
  {
    label: "Email",
    type: "email",
    placeholder: "Username",
    name: "username",
  },
  {
    label: "Senha",
    type: "password",
    placeholder: "Password",
    name: "password",
  },
]

export const Login = () => {
  const [fetching, setFetching] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setFetching(true)

    toast.info("Iniciando o processo")
    toast.info("Buscando ID de usuário...")

    const userId = await fetchUserId(data)

    if (!userId) {
      setFetching(false)
      return
    }

    toast(`ID ${userId} encontrado. Buscando número de livros`)

    const bookNumber = await fetchBookNumber(userId)

    if (!bookNumber) {
      setFetching(false)
      return
    }

    toast(
      `Exportando ${bookNumber} livros. Isso pode demorar um pouco, vá buscar um café.`,
    )

    const booksUrl = await fetchBooks(userId)

    if (!booksUrl) {
      setFetching(false)
      return
    }

    toast(`Gerando e baixando arquivo...`)

    var a = document.createElement("a")
    a.download = "books.csv"
    a.href = booksUrl
    document.body.appendChild(a)
    a.click()
    a.remove()

    toast.success(`Arquivo gerado com sucesso`)
    setFetching(false)
  }

  if (fetching) {
    return (
      <div>
        <p className="text-2xl">Carregando...</p>
      </div>
    )
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full gap-4"
      >
        {inputs.map(({ label, name, placeholder, type }) => (
          <div key={name} className="flex flex-col gap-1">
            <label className="font-bold" htmlFor={name}>
              {label}
            </label>
            <input
              className="px-4 py-2 border rounded"
              type={type}
              placeholder={placeholder}
              {...register(name, {
                required: `${name} required`,
                maxLength: 100,
              })}
            />
            {errors[name] && (
              <p className="text-red-600">{errors[name]?.message}</p>
            )}
          </div>
        ))}

        <input
          type="submit"
          value="Enviar"
          className="px-4 py-2 transition border rounded bg-beige-header hover:bg-stone-200"
        />
      </form>
    </>
  )
}
