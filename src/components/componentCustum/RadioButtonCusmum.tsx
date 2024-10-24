import ButtonImageTextComponent from './ButtonImageText';

const RadioCustumComponent = ()=>{


return(

    <div className="w-full h-fit flex flex-row justify-between">
         <ButtonImageTextComponent text="Stays"/>
         <ButtonImageTextComponent text="Experiences"/>
         <ButtonImageTextComponent text="Cars"/>
         <ButtonImageTextComponent text="Flights"/>
    </div>
)


}

export default RadioCustumComponent