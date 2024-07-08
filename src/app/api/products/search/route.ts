import { z } from 'zod'
import type { NextRequest } from 'next/server'
import data from '../data.json'

export async function GET(
  request: NextRequest,
) {
  await new Promise((resolve) => setTimeout(resolve, 3000))

  const { searchParams } = request.nextUrl
  //  validando o searchParams
  const query = z.string().parse(searchParams.get('q'))

  const products = data.products.filter(product => {
    // filtrando os produtos, então se o tittle do produto, inclue na busca do usuario
    return product.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  })

  return Response.json(products)
}
