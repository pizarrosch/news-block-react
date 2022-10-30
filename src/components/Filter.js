function Filter({filterName, onClick}) {

  return (
    <select onClick={onClick}>
      {filterName.map((item) => {
        return <option value={item}>{item}</option>
      })}
    </select>
  )
}

export default Filter;