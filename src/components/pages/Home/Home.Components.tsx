import HeaderComponent from '@/components/header.Component';
import FooterComponent from '@/components/Footer.Component';
import BenefitsComponent from '@/components/HomeComponents/Benefits.Component';
<<<<<<< HEAD
import CarouselParent from '@/components/HomeComponents/SuggestionsForDiscovery/CarouselParent';
=======
import Carousel1 from '@/components/HomeComponents/carousel1/carousel1';
import CarouselParent
  from '@/components/HomeComponents/SuggestionsForDiscovery/CarouselParent';

>>>>>>> parent of 29888d5 (section Top 10 authors of the month)
import JoinNewsLetter from './Join-News/JoinNewsLetter';
function HomeComponent() {

  return (
    <>
      <section className='flex flex-col text-[3rem] gap-28'>

         <HeaderComponent/>
<<<<<<< HEAD
        <BenefitsComponent/>
        <CarouselParent/>
        <JoinNewsLetter/>
=======
         <Carousel1/>
         <BenefitsComponent/>
         <CarouselParent/>
         <JoinNewsLetter/>
>>>>>>> parent of 29888d5 (section Top 10 authors of the month)
         <FooterComponent/>

      </section>
    </>
  )
}

export default HomeComponent
