import { useEffect, useState } from 'react'
import '../index.css'
import { MdDarkMode } from "react-icons/md";
import { BsSun } from "react-icons/bs";


const ThemeProvider = () => {
    const [theme,setTheme] = useState("light");
    useEffect(()=>{
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark');
      }else{
        setTheme('light');
      }
    },[]);
    
      useEffect(()=>{
        if (theme=="dark") {
          document.documentElement.classList.add("dark");
        }else{
          document.documentElement.classList.remove("dark");
        }
      },[theme]);
    
      const handleThemeSwitch = () =>{
        setTheme(theme === "dark" ? "light" : "dark");
      };
  return (
    <button onClick={handleThemeSwitch}>
        {
            theme === 'dark' ? <BsSun size={25}/> : <MdDarkMode size={25} />
        }
    </button>
)
}

export default ThemeProvider