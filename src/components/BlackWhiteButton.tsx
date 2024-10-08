import { useState } from 'react';

import {
  Moon,
  Sun,
} from 'lucide-react';

import { Button } from '@/components/ui/button';

export function ButtonIcon() {
  const [isSun, setIsSun] = useState(true);
  const toggleIcon = () => {
    setIsSun(prev => !prev); // Inverser l'état
  };

  return (
    <Button 
      variant="outline" 
      className="w-[5rem] h-[5rem] rounded-full"
      onClick={toggleIcon} // Ajouter un gestionnaire d'événements pour le clic
    >
      {isSun ? (
        <Sun className="h-[3rem] w-[3rem] text-navtext1" />
      ) : (
        <Moon className="h-[3rem] w-[3rem] text-navtext1" />
      )}
    </Button>
  );
}
