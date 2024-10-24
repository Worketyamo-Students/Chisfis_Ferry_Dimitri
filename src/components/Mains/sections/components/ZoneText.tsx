import RadioCustumComponent
  from '@/components/componentCustum/RadioButtonCusmum';

const S1ZoneTextComponent =()=>{

 return (

    <div className="flex flex-1 h-full flex-col bg-orange-300 gap-[3rem]">
        <h1 className="text-[8rem] font-Inter font-medium text-black">Hotel, Car & Experences</h1>
        <p className="text-[2rem] text-navtext1">
            Accompanying us, you have a trip full of expreriences.With Chisfis,booking accommodation,resort villas, hotels
        </p>
        <RadioCustumComponent/>
    </div>
 )


}

export default S1ZoneTextComponent