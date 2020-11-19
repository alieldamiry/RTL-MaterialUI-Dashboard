
import Dashboard from './components/Dashboard'
import './App.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { useEffect, useState } from 'react';

function App() {

  const englishLanguage = {
    lang: 'en',
    dir: 'ltr',
    text: 'عربي'
  };
  const arabicLanguage = {
    lang: 'ar',
    dir: 'rtl',
    text: 'EN'
  };

  const [language, setLanguage] = useState(englishLanguage);

  useEffect(() => {
    console.log(document.getElementsByTagName('html')[0].lang);
    document.getElementsByTagName('html')[0].setAttribute("lang", language.lang);
    document.getElementsByTagName('html')[0].setAttribute("dir", language.dir);

  }, [language]);


  const toggleLanguage = () => {
    if (document.getElementsByTagName('html')[0].lang === 'en') {
      setLanguage(arabicLanguage)
    } else {
      setLanguage(englishLanguage)
    }
  }

  const theme = createMuiTheme({
    direction: language.dir,
  });
  return (

    <div className="App">
      <button onClick={toggleLanguage}>{language.text}</button>
      <ThemeProvider theme={theme}>
        <Dashboard />
      </ThemeProvider>
    </div>
  );
}

export default App;
