import {useNavigate} from "react-router";
import s from './ReturnButton.module.css';

function ReturnButton({theme}) {

  const navigate = useNavigate();

  return (
    <button className={theme === 'dark' ? s.buttonDark : s.button} onClick={() => navigate(-1)}>Back</button>
  )
}

export default ReturnButton;