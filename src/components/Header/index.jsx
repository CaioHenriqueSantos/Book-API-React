import { useState } from "react";
import { useContext } from "react";
import Context from "../../context/Context";

function Header() {
  const { data, setData, setShow, newData, setNewData } = useContext(Context)
  const [search, setSearch] = useState("");
  const handelClickSearch = (event) => {
    event.preventDefault()
    const filterData = data.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
    if (filterData.length === 0) {
      return alert("Nenhum resultado encontrado")
    }
    setNewData(filterData)
    setShow("notShow")
  }

  return (
    <>
      <header>
        <h1>Header</h1>
        <form>
          <input type="text" placeholder="Search" value={search} onChange={({ target }) => setSearch(target.value)} />
          <button onClick={handelClickSearch}>Search</button>
        </form>
      </header>
    </>
  )
}

export default Header