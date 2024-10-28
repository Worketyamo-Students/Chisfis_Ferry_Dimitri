import FooterComponent from '@/components/Footer.Component';
import HeaderComponent from '@/components/header.Component';
import BenefitsComponent from '@/components/HomeComponents/Benefits.Component';
import Carousel1 from '@/components/HomeComponents/carousel1/carousel1';
import CarouselParent
  from '@/components/HomeComponents/SuggestionsForDiscovery/CarouselParent';

import JoinNewsLetter from './Join-News/JoinNewsLetter';

function HomeComponent() {

  return (
    <>
      <section className='flex flex-col text-[3rem] gap-28'>

         <HeaderComponent/>
         <Carousel1/>
         <BenefitsComponent/>
         <CarouselParent/>
         <JoinNewsLetter/>
         <FooterComponent/>

      </section>
    </>
  )
}

export default HomeComponent
