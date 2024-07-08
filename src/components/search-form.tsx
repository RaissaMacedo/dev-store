'use client'

import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent } from "react";

export function SearchForm() {
  
  const router = useRouter()
  const searchParams = useSearchParams()
  // deixar o input preenchido
  const query = searchParams.get('q')

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    // previnir que faz redicionamento
    event.preventDefault()

    // pegando o dado do input
    const formData = new FormData(event.currentTarget)
    // tranformando em um object
    const data = Object.fromEntries(formData)
    // acessando a query de busca
    const query = data.q

    if (!query) {
      return null
    } 
    // enviando para a pagina que o cliente deseja
    router.push(`/search?q=${query}`)
  }
  return (
    <form onSubmit={handleSearch} className="flex w-[320px] items-center gap-3 rounded-full bg-zinc-90 px-5 py-3 ring-zinc-700">
      <Search className="w-5 h-5 text-zinc-500" />

      <input
        name="q"
        defaultValue={query ?? ''}
        placeholder="Buscar produtos..."
        className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
      />
   </form>
  )
}