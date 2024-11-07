import { ReactElement } from 'react';

import { Button } from '@/components/ui/button';

interface PropsButtonImage{

    text?:string
    Icone?:ReactElement
    style?:string
}

export const ButtonImage:React.FC<PropsButtonImage>=({
    text,
    Icone,
    style
})=> {
  

  return (
    <Button 
      variant="outline" 
      className={style}
    >
     {Icone}
     {text}
    </Button>
  );
}
