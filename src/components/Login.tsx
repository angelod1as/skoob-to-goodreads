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
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setLoading(true)

    await fetch("/api/skoob", { method: "POST", body: JSON.stringify(data) })

    setLoading(false)
  }

  if (loading) {
    return (
      <div>
        <p className="text-2xl">Carregando...</p>
        <p>(Vá buscar um café. Isso pode demorar)</p>
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
