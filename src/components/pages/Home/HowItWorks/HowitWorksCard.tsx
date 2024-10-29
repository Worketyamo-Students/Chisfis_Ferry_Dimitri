
const Props = [
    {image:"../../../../src/assets/HowItWorks1.svg",title:"Book & relax",comment:"Let each trip be an inspirational journey, each room a peaceful space"},
    {image:"../../../../src/assets/HowItWorks2.svg",title:"Smart checklist",comment:"Let each trip be an inspirational journey, each room a peaceful space"},
    {image:"../../../../src/assets/HowItWorks3.svg",title:"Save more",comment:"Let each trip be an inspirational journey, each room a peaceful space"},
]
const HowitWorksCard = () => {

  return (
    <div className="flex items-center justify-center gap-[15rem]">
        {Props.map((prop,index)=>(
            <div key={index} className="flex flex-col gap-4 items-center">
                <div><img src={prop.image} /></div>
                <h5 className="text-[#1F2937] dark:text-white text-[1.8rem] font-semibold">{prop.title}</h5>
                <h6 className="text-[1.5rem] text-color_g text-center w-[30rem]">{prop.comment}</h6>
            </div>
        ))}
    </div>
  )
}

export default HowitWorksCard