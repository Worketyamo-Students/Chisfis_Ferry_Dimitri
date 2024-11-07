import React from 'react';

interface PropsText {

 titre: string
 paragraph:string

}

const TextHotelCard : React.FC<PropsText> =({
    titre,
    paragraph
})=>{

    return (
   <div className="w-[90%] h-fit flex flex-col gap-[3rem]">
     <h1 className="text-[8rem] font-medium font-Poppins text-black_col space-y-0 leading-[9rem]">
        {titre}
     </h1>
     <p className="text-[2rem] font-Poppins text-navtext1">
       {paragraph}
     </p>
   </div>
    )
}
export default TextHotelCard