import { ReactElement } from 'react';

import { Badge } from '@/components/ui/badge';

interface PropsBadge {

    text: string
    image?: ReactElement
    style: string
}

const BadgeComponent:React.FC<PropsBadge>=({
    text,
    image
})=>{

    return(
    <Badge className="flex flex-row gap-4 w-fit px-6 h-[3.4rem] rounded-full justify-center items-center bg-color_g/30 hover:bg-color_g/30">
        <span className='text-[1.3rem] text-black font-medium'>{text}</span>
         {image}
    </Badge>
    )
}
export default BadgeComponent

