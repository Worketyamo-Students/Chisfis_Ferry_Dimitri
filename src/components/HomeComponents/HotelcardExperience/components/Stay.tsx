import { MapPin } from 'lucide-react';

import { CalendrierComponent } from './Calendrier';
import { ComboboxDemo } from './contantsearchStays';
import Content from './DivContent';

const Stay: React.FC = () => {

  return (
    <div className='w-full flex flex-row items-center'>
      <Content
        content={
          <div className='flex items-center gap-6'>

            <MapPin className='w-[3rem] h-[3rem] text-gray-400' />
            <div className="flex w-full flex-col justify-center gap-1">
              <ComboboxDemo />
              <p className='text-[1.4rem] text-gray-400'>where are you going ?</p>
            </div>

          </div>
        }
        style='w-[45%] h-full flex items-center gap-6 px-[4rem] rounded-l-full'
      />
      <Content
        content={
         
         <CalendrierComponent/>
          
        }
        style='w-[29%] h-full flex items-center border-solid border-x-[0.1rem]  border-x-gray-400 px-5'
      />
      <Content content={
        <div>bonjour</div>

      }
      style='h-full flex-1 items-center'
      />
    </div>
  );
}
export default Stay;




//w-[45%] h-full flex px-[3rem] py-[4rem] items-center gap-6