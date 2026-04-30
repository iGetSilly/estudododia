// app/products/SearchForm.tsx
"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"

const schema = z.object({
  query: z.string().min(1, "Digite algo para buscar"),
})

type FormData = z.infer<typeof schema>

export default function SearchForm() {
  const router = useRouter()

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  function onSubmit(data: FormData) {
    router.push(`/contacts?q=${data.query}`)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("query")} placeholder="Buscar usuario" />
      {errors.query && <p>{errors.query.message}</p>}
      <button type="submit">Buscar</button>
    </form>
  )
}