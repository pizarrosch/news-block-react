import Topics from './Components/Topics';
import './App.css';
import {useState} from "react";

function App() {

  const [theme, setTheme] = useState('light');

  function handleClick() {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  return (
    <div>
      <Topics theme={theme} onClick={handleClick}/>
    </div>
  );
}

export default App;
