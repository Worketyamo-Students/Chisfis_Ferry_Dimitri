import H1Session1Component from './sections/Home1session1';
import H1Session2Component from './sections/Home1session2';

const Mains1Component = () => {

  return (

    <main className="w-screen mt-[15rem] px-[18rem] flex flex-col gap-[6rem]">
      <H1Session1Component />
      <H1Session2Component />
    </main>
  )

}

export default Mains1Component