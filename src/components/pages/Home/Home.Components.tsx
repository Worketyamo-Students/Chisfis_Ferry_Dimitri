import HeaderComponent from '@/components/header.Component';
import FooterComponent from '@/components/Footer.Component';
import BenefitsComponent from '@/components/HomeComponents/Benefits.Component';
import CarouselParent from '@/components/HomeComponents/SuggestionsForDiscovery/CarouselParent';
import JoinNewsLetter from './Join-News/JoinNewsLetter';
import TopAuthorComponent from '@/components/HomeComponents/TopAuthors/Parent';
function HomeComponent() {

  return (
    <>
      <section className='flex flex-col text-[3rem] gap-28'>

         <HeaderComponent/>
        <BenefitsComponent/>
        <CarouselParent/>
        <JoinNewsLetter/>
        <TopAuthorComponent/>
         <FooterComponent/>

      </section>
    </>
  )
}

export default HomeComponent
