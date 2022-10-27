import style from './Theme.module.css';

function Theme(props) {

  const html = document.querySelector('html');

  return (
    <>
      <div className={props.theme === 'dark' ? html.style.backgroundColor='black' : html.style.backgroundColor='white'}>
        <div className={style.image} onClick={props.onClick}>
          {props.theme === 'light' ?
            <img src={require('../images/icons8-sun.svg').default} alt='sun'/> :
            <img src={require('../images/clear_night.svg').default} alt='moon'/>}
        </div>
      </div>
    </>
  )
}

export default Theme;