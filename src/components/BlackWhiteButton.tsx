import { useEffect, useState } from 'react';

import {
  Moon,
  Sun,
} from 'lucide-react';

import { Button } from '@/components/ui/button';

export function ButtonIcon() {
const [theme,setTheme] = useState('light');
useEffect(()=>{
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    setTheme('dark');
  }else{
    setTheme('light');
  }
},[]);

useEffect(()=>{
  if (theme=='dark') {
    document.documentElement.classList.add('dark');
  }
  else{
    document.documentElement.classList.remove('dark');
  }
},[theme])

const handleThemeSwich = () =>{
  setTheme(theme === 'dark' ? 'light' : 'dark');
}
  return (
    <Button onClick={handleThemeSwich} className='bg-none'>
      {
        theme === 'dark' ? <Sun size={35}/> : <Moon size={35}/>
      }
    </Button>
  );
}
