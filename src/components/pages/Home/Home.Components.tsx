import FooterComponent from '@/components/Footer.Component';
import HeaderComponent from '@/components/header.Component';
import BenefitsComponent from '@/components/HomeComponents/Benefits.Component';
import Carousel1 from '@/components/HomeComponents/carousel1/carousel1';
import ExploreParent
  from '@/components/HomeComponents/ExploreNearBy/ExploreParent';
import HotelCardExperienreParent
  from '@/components/HomeComponents/HotelcardExperience/HotelCarExperience';
import CarouselParent
  from '@/components/HomeComponents/SuggestionsForDiscovery/CarouselParent';
import TopAuthorComponent from '@/components/HomeComponents/TopAuthors/Parent';

import ParentHowitWorks from './HowItWorks/Parent';
import JoinNewsLetter from './Join-News/JoinNewsLetter';

function HomeComponent() {
  return (
    <>

      <section className='flex flex-col text-[3rem] gap-20'>
        <HeaderComponent />
        <HotelCardExperienreParent/>
        <Carousel1/>
        <BenefitsComponent />
        <ParentHowitWorks />
        <CarouselParent />
        <JoinNewsLetter />
        <TopAuthorComponent />
        <ExploreParent />
        <FooterComponent />
      </section>
    </>
  )
}

export default HomeComponent;
