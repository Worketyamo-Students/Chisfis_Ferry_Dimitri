import H1CarouselComponent from '@/components/componentCustum/Home1Carousel';

const H1Session2Component = ()=>{

return (

 <section className="w-full h-[50rem] bg-slate-100 flex flex-col gap-4">
        <h2 className="text-[4rem] font-Inter font-medium text-black">Suggestions for discovery</h2>
        <p className="text-[2rem] text-navtext1">
        Popular places to recommends for you
        </p>
        <H1CarouselComponent/>
 </section>
)

}

export default H1Session2Component