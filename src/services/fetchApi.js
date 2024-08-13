
export const fetchApi = async () => {
  const req = await fetch("https://api.mercadolibre.com/sites/MLB/search?q=livros")
  const res = await req.json()
  console.log(res)
  return res
}

