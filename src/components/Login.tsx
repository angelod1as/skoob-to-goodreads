import React, { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"

type FormData = {
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
  const [status, setStatus] = useState("")

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setFetching(true)
    setStatus("Iniciando o processo")

    setStatus("Buscando ID de usuário")

    // TODO: handle wrong user/pass
    // TODO: Add Try/Catches to >ALL<
    const userIdResponse = await fetch("/api/skoob/login", {
      method: "POST",
      body: JSON.stringify(data),
    })
    const { userId } = await userIdResponse.json()

    setStatus(`ID ${userId} encontrado. Buscando número de livros`)

    const bookNumberResponse = await fetch("/api/skoob/bookcase", {
      method: "POST",
      body: JSON.stringify({ userId }),
    })
    const { bookNumber } = await bookNumberResponse.json()

    setStatus(
      `Exportando ${bookNumber} livros. Isso pode demorar um pouco, vá buscar um café.`,
    )

    const books = await fetch("/api/skoob", {
      method: "POST",
      body: JSON.stringify({ userId }),
    })

    setStatus(`Gerando e baixando arquivo...`)

    const blob = await books.blob()
    var objectUrl = URL.createObjectURL(blob)

    var a = document.createElement("a")
    a.download = "books.csv"
    a.href = objectUrl
    document.body.appendChild(a)
    a.click()
    a.remove()

    setFetching(false)
  }

  if (fetching) {
    return (
      <div>
        <p className="text-2xl">Carregando...</p>
        <p>{status}</p>
      </div>
    )
  }

  return (
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
  )
}
