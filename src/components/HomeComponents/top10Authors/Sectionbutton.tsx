import ButtonComponent from '@/components/ButtonsComponent/ButtonCustum';

import ButtonLoading from './ButtonLoader';

const SectionButtonComponent = ()=> {


    return (

        <div className="w-full h-fit p-[3rem] flex flex-row gap-[2rem] justify-center items-center">
            <ButtonLoading title='Show me more'/>
            <ButtonComponent title='Become a host'/>
        </div>
    )
}
export default SectionButtonComponent