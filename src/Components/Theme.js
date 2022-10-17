import style from './Theme.module.css';
import {useState} from "react";

function Theme() {

  const [theme, setTheme] = useState('light');

  function handleClick() {
   if (theme === 'light') {
     setTheme('dark');
   } else {
     setTheme('light');
   }
  }

  return (
    <div className={style.image} onClick={handleClick}>
      {
        theme === 'light' ?
          <img className={style.imageSize} src={require('../images/icons8-sun.svg').default} alt='sun'/> :
          <img className={style.imageSize} src={require('../images/clear_night.svg').default} alt='moon'/>
      }
    </div>
  )
}

export default Theme;