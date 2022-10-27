import Topics from './components/Topics';
import News from "./components/News";
import './App.css';
import {useState} from "react";
import Theme from "./components/Theme";
import news from "../src/data";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Articles from "./components/subcomponents/Articles";

function App() {

  const [theme, setTheme] = useState('light');

  function handleThemeClick() {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  return (
    <div>
      <Theme theme={theme} onClick={handleThemeClick} />
      <Router>
        <Routes>
          <Route path='/' element={<Topics topics={news} theme={theme} />} />
          <Route path='/news/:topic' element={ <News topics={news} theme={theme} />} />
          <Route path='/news/:topic/:article' element={<Articles topics={news} theme={theme}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
