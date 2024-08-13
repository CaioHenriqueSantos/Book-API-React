import { useContext, useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loading from "../components/Loading/Loading";
import { fetchApi } from "../services/fetchApi";
import ListeItems from "../components/ListItems";
import Context from "../context/Context";



function Home() {
  const { data, setData, page, setPage, show, newData, setNewData } = useContext(Context)

  useEffect(() => {
    const getApi = async (inicio, fim) => {
      const response = await fetchApi()
      setData(response.results.slice(inicio, fim))
      setNewData(response.results.slice(inicio, fim))
    }
    getApi(page, page + 10)
  }, [])

  const handleClickNext = (event) => {
    event.preventDefault();
    setData(null)
    const newPage = page + 10
    if (newPage > 49) {
      return alert("Pagina Nao Existe")
    }
    setPage(newPage)
    getApi(page, page + 10)
  }

  const handleClickPrev = (event) => {
    event.preventDefault();
    setData(null)
    const newPage = page - 10
    if (newPage < 0) {
      return alert("Inicio da Pagina")
    }
    setPage(newPage)
    getApi(page, page - 10)
  }


  return (
    <>
      <div>
        <Header />
        <h1>Home</h1>
        {data ? <ListeItems items={newData} /> : <Loading />}
        <button className={show} onClick={handleClickPrev}>Preview</button>
        <button className={show} onClick={handleClickNext}>Next</button>
        <Footer />
      </div>
    </>
  )
}

export default Home
