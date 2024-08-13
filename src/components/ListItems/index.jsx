const ListeItems = ({ items }) => {
  return (
    <div>
      {items.map(e => (
        <div>
          <img src={e.thumbnail} alt="" />
          <h2>{e.title}</h2>
          <span>{e.price}</span>
        </div>
      ))}
    </div>
  )
}

export default ListeItems