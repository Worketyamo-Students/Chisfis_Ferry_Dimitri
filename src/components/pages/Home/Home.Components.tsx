import HeaderComponent from '@/components/header.Component';
import FooterComponent from '@/components/Footer.Component';
import BenefitsComponent from '@/components/HomeComponents/Benefits.Component';
import CarouselParent from '@/components/HomeComponents/SuggestionsForDiscovery/CarouselParent';
function HomeComponent() {

  return (
    <>
      <section className='flex flex-col text-[3rem] gap-28'>

         <HeaderComponent/>
        <BenefitsComponent/>
        <CarouselParent/>
         <FooterComponent/>

      </section>
    </>
  )
}

export default HomeComponent
