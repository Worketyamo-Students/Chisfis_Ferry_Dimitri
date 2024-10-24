import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import CarouselItemCOmponent from './CarouselItemCustum';

const H1CarouselComponent:React.FC =()=>{


    return (
<>
<Carousel className=''>
  <CarouselContent className={'h-[28.5rem] gap-[4rem] flex items-center p-2'}>
    <CarouselItemCOmponent/>
    <CarouselItemCOmponent/>
    <CarouselItemCOmponent/> 
    <CarouselItemCOmponent/>
    <CarouselItemCOmponent/>
    <CarouselItemCOmponent/>
    <CarouselItemCOmponent/>
  </CarouselContent>
  <CarouselPrevious className={'w-[5rem] h-[5rem] bg-white border-solid border-[0.1rem] border-slate-300'}/>
  <CarouselNext className={'w-[5rem] h-[5rem] bg-white border-solid border-[0.1rem] border-slate-300'} />
</Carousel>
</>
    )
}
export default H1CarouselComponent