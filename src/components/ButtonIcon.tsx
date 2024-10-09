import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

import { ButtonIcon } from './ButtonImage';

const PopoverCustum = () => {

    return (
        <Popover>
            <PopoverTrigger>
               <ButtonIcon/>
            </PopoverTrigger>
            <PopoverContent className={'flex items-center self-start absolute right-0 w-[40rem] h-[4.5rem] border-solid border-[0.3rem] rounded-full p-0 border-teal-400'}>
             <Input type="text" placeholder="Type and press enter" className='w-full h-full rounded-full px-[1.5rem] text-[1.7rem]'/>
            </PopoverContent>
        </Popover>
    )
}

export default PopoverCustum