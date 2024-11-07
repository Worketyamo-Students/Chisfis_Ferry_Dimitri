import {
  SetStateAction,
  useState,
} from 'react';

import {
  Circle,
  Settings,
} from 'lucide-react';

import ButtonCustumComponent
  from '@/components/ButtonsComponent/buttonCustumLogin';

import { ButtonImage } from './components/Buttonscustum';
import Stays from './components/Stay';
import TextHotelCard from './components/Text';

const HotelCardExperienreParent =()=>{

const Experiences = () => <div>Contenu pour Experiences</div>;
const Cars = () => <div>Contenu pour Cars</div>;
const Flights = () => <div>Contenu pour Flights</div>;
const Icon=()=><Circle className='text-black_col w-[1rem] h-[1rem] bg-black_col rounded-full'/>;

  const [activeButton, setActiveButton] = useState('Stays');

  const handleButtonClick = (buttonName: SetStateAction<string>) => {
      setActiveButton(buttonName);
  };

  const getButtonClass = (buttonName: string) => {
      return `text-[1.7rem] font-semibold flex flex-row items-center gap-[2rem] ${activeButton === buttonName ? 'text-black_col' : 'text-gray-500'
          }`;
  };
 const getIconClass =(buttonName: string)=>{
  
  return ` ${activeButton === buttonName? 'block':'hidden'}`
 }
 const renderActiveIcon = ()=>{
    switch(activeButton){
      case 'Stays':
              return <Icon/>;
          case 'Experiences':
              return <Icon />;
          case 'Cars':
              return <Icon />;
          case 'Flights':
              return <Icon />;
          default:
              return null;
    }
 }
  const renderActiveComponent = () => {
      switch (activeButton) {
          case 'Stays':
              return <Stays />;
          case 'Experiences':
              return <Experiences />;
          case 'Cars':
              return <Cars />;
          case 'Flights':
              return <Flights />;
          default:
              return null;
      }
  };
  return (
    <div className="w-full flex flex-col h-[70rem] mt-[15rem] items-center bg-red-100/40">
            <div className="w-full h-fit flex flex-row px-[19rem] py-[3rem]">
              <div className="flex-1 flex flex-col gap-[5rem]">
                  <TextHotelCard titre='Hotel,car & experiences' paragraph='Accompanying us, you have a trip full of experiences. With Chisfis, booking accommodation, resort villas, hotels'/>
                  <ButtonCustumComponent text='Start your search' title='startyoursearch' chemin='#'/>
                  <div className='w-full h-[9rem] flex flex-row items-start justify-center gap-[6rem]'>
                     <button className={getButtonClass('Stays')} onClick={() => handleButtonClick('Stays')}> <span className={getIconClass('Stays')}>{renderActiveIcon()} </span>Stays</button>
                     <button className={getButtonClass('Experiences')} onClick={() => handleButtonClick('Experiences')}><span className={getIconClass('Experiences')}>{renderActiveIcon()}</span>Experiences</button>
                     <button className={getButtonClass('Cars')} onClick={() => handleButtonClick('Cars')}><span className={getIconClass('Cars')}>{renderActiveIcon()} </span>Cars</button>
                     <button className={getButtonClass('Flights')} onClick={() => handleButtonClick('Flights')}><span className={getIconClass('Flights')}>{renderActiveIcon()} </span>Flights</button>
                  </div>
              </div>

              <div className="flex-1 bg-red-950">

              </div>
               <div className="w-[5rem] h-[5rem] right-5 top-[10rem] fixed rounded-2xl shadow-xl">
                    <ButtonImage style='w-full h-full rounded-2xl bg-white border-solid border-[0.1rem] border-color_g/30 dark:bg-PrimaryCol' Icone={<Settings className='w-full h-full'/>}/>
               </div>
            </div>
            <div className="w-[77%] h-fit bg-white/60 rounded-full absolute top-[68.3rem] shadow-2xl">
                    {renderActiveComponent()}
            </div>
    </div>
  )
}

export default HotelCardExperienreParent