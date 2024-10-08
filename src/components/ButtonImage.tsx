import { Search } from 'lucide-react';

import { Button } from '@/components/ui/button';

export function ButtonIcon() {
  

  return (
    <Button 
      variant="outline" 
      className="w-[5rem] h-[5rem] rounded-full"
    >
     <Search className='w-[2.5rem] h-[2.5rem] text-navtext1'/>
    </Button>
  );
}
