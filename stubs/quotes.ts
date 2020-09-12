import { v4 } from 'https://deno.land/std/uuid/mod.ts'
import Quote from '../interfaces/quote.ts'

let quotes: Array<Quote> = [
  {
    "id": v4.generate(),
    "philosophy": "Stoicism",
    "author": "Seneca",
    "quote": "Sometimes even to live is an act of courage.",
  },
  {
    "id": v4.generate(),
    "philosophy": "Existentialism",
    "author": "Fyodor Dostoyevsky",
    "quote": "The soul is healed by being with children.",
  },
  {
    "id": v4.generate(),
    "philosophy": "Mysticism",
    "author": "Carl G. Jung",
    "quote": "In all chaos there is a cosmos, in all disorder a secret order.",
  },
  {
    "id": v4.generate(),
    "philosophy": "Existentialism",
    "author": "Jean-Paul Sartre",
    "quote": "There may be more beautiful times, but this one is ours.",
  },
  {
    "id": v4.generate(),
    "philosophy": "Stoicism",
    "author": "Seneca",
    "quote": "It is the power of the mind to be unconquerable",
  },
  {
    "id": v4.generate(),
    "philosophy": "Mysticism",
    "author": "Alan Watts",
    "quote": "Trying to define yourself is like trying to bite your own teeth.",
  }
]

export default quotes
