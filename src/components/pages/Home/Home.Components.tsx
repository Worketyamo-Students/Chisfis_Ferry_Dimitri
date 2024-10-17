import HeaderComponent from '@/components/header.Component';
import FooterComponent from '@/components/Footer.Component';
function HomeComponent() {

  return (
    <>
      <section className='flex flex-col text-[3rem] gap-28'>

         <HeaderComponent/>
         <FooterComponent/>

      </section>
    </>
  )
}

export default HomeComponent
