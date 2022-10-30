import s from './Filter.module.css';

function Filter({filterName, onClick}) {

  return (
    <select className={s.filter} onClick={onClick}>
      {filterName.map((item) => {
        return <option className={s.option} value={item}>{item}</option>
      })}
    </select>
  )
}

export default Filter;