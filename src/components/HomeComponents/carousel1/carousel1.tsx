import { dataCarousels } from '@/functions/dataCarousels';

import { CarouselSize } from '../SuggestionsForDiscovery/Carousel';
import Carousel1Titre from './Titrecarousel1';

const Carousel1 = () => {
  return (
    <>
<div className="px-[9rem] mt-[5rem]">
    <div className="flex flex-col items-center justify-center bg-[#FFF7ED] dark:bg-[#0E131F] rounded-[30px] py-[3rem] px-[5rem] ">
        <div className="py-[2rem] flex gap-8 w-full">
        <Carousel1Titre title="Suggestions for discovery" comment="Popular places to recommends for you"/>
        </div>
        <div className="flex items-center ">
          <CarouselSize data={dataCarousels.Carousel1Data}   cardClassName="justify-start items-start flex flex-col gap-6" />
        </div>
    </div>
</div>

    </>
  )
}

export default Carousel1