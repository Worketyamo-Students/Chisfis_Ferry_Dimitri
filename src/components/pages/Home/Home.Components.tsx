import HeaderComponent from '@/components/header.Component';
import FooterComponent from '@/components/Footer.Component';
import BenefitsComponent from '@/components/HomeComponents/Benefits.Component';
import CarouselParent from '@/components/HomeComponents/SuggestionsForDiscovery/CarouselParent';
import JoinNewsLetter from './Join-News/JoinNewsLetter';
import TopAuthorComponent from '@/components/HomeComponents/TopAuthors/Parent';
import ExploreParent from '@/components/HomeComponents/ExploreNearBy/ExploreParent';
import ParentHowitWorks from './HowItWorks/Parent';
function HomeComponent() {

  return (
    <>
      <section className='flex flex-col text-[3rem] gap-20'>

         <HeaderComponent/>
        <BenefitsComponent/>
        <ParentHowitWorks/>
        <CarouselParent/>
        <JoinNewsLetter/>
        <TopAuthorComponent/>
        <ExploreParent/>
         <FooterComponent/>

      </section>
    </>
  )
}

export default HomeComponent
