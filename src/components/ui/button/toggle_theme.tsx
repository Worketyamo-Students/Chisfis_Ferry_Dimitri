'use client'
import { MdDarkMode } from "react-icons/md";
import { FaRegSun } from "react-icons/fa6";

  return (
    <button onClick={toggleTheme}>
        {
            theme === 'dark' ? <FaRegSun size={20}/> : <MdDarkMode size={20} />
        }
    </button>

  )
}

export default ThemeToggle