import { default as nodeFetch } from 'node-fetch'

const host = 'https://data.nba.net/10s/prod/v1'

export async function fetch<T = any>(path: string): Promise<T> {
  const res = await nodeFetch(`${host}${path}`)
  return await res.json()
}
