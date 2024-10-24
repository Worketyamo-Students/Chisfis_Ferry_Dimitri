import FooterComponent from '@/components/Footer.Component';
import HeaderComponent from '@/components/header.Component';
import Mains1Component from '@/components/Mains/Mains1';

function HomeComponent() {

  return (
    <>
      <section className='w-screen h-screen flex flex-col text-[3rem]'>

         <HeaderComponent/>
         <Mains1Component/>
         <FooterComponent/>

      </section>
    </>
  )
}

export default HomeComponent
