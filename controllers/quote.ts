import { v4 } from 'https://deno.land/std/uuid/mod.ts'
import Quote from '../interfaces/quote.ts'
import quotes from '../stubs/quotes.ts'

function find(id: string) {
  const quote: Quote | undefined = quotes.find((quote) => quote.id === id)
  return quote
}

export default {

  /**
   * Get all the quotes.
   * @return All the quotes.
   */
  index: ({ response }: { response: any }) => {
    response.status = 200
    response.body = quotes
  },

  /**
   * Get the quote given by its id.
   * @param  response  The response object.
   * @return The quote if exists.
   */
  show: ({ params, response }: { params: { id: string }, response: any }) => {

    const quote = find(params.id)
    if(!quote) {
      response.status = 404
      response.body = { message: 'Quote not found' }
      return
    }

    response.status = 200
    response.body = quote

  },

  /**
   * Create a new quote.
   * @param  request  The request object.
   * @param  response  The response object.
   * @return the quote if successful.
   */
  create: async ({ request, response }: { request: any, response: any }) => {

    if (!request.hasBody) {
      response.status = 400
      response.body = { message: 'No data provided' }
      return
    }

    const body = await request.body()
    const values = await body.value

    let newQuote: Quote = {
      id: v4.generate(),
      philosophy: values.philosophy,
      author: values.author,
      quote: values.quote,
    }

    quotes.push(newQuote)
    response.status = 200
    response.body = newQuote
  },

  /**
   * Update the quote given by its id.
   * @param  request  The request object.
   * @param  response  The response object.
   * @return The quote if successful.
   */
  update: async ({ params, request, response }: {
      params: { id: string },
      request: any,
      response: any,
    },
  ) => {

    const quote = find(params.id)

    if(!quote) {
      response.status = 404
      response.body = { message: 'Quote not found' }
      return
    }

    const body = await request.body()
    const values = await body.value
    const updateInfos: { philosophy?: string; author?: string; quote?: string } = values
    let newQuote = quotes.map((q) => {
      return q.id === params.id ? { ...q, ...updateInfos } : q
    })

    quotes.splice(0, quotes.length, ...newQuote)
    response.status = 200
    response.body = quotes.find((quote) => quote.id === params.id)

  },

  /**
   * Delete the quote given by its id.
   * @param  response  The response object.
   * @return 204
   */
  destroy: ({ params, response }: { params: { id: string }, response: any }) => {

    const quote = find(params.id)
    if (!quote) {
      response.status = 404
      response.body = { message: 'Quote not found' }
      return
    }

    let newQuote = quotes.filter((quote) => quote.id !== params.id)
    quotes.splice(0, quotes.length, ...newQuote)

    response.status = 204

  },
}
