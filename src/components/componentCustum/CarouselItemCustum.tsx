import { ReactElement } from 'react';

import { CarouselItem } from '../ui/carousel';

interface CarouselProps{
    image: ReactElement
    title: string
    description: string
}

const CarouselItemCOmponent:React.FC<CarouselProps>=(
    {
        image,
        title,
        description
 
    }
)=>{



    return (

        <CarouselItem className={"h-full basis-1/6 flex flex-col gap-4"}>
            <div className='w-full h-[75%] bg-slate-500 rounded-3xl'>
                 {image}
            </div>
            <div className='w-full h-[25%]'>
                 <h1  className='text-[2rem]'>{title}</h1>
                 <p className='text-[1rem]'>{description}</p>
            </div>
        </CarouselItem>
    )

}

export default CarouselItemCOmponent