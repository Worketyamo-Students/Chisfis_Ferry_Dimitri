import FormTitle from '@/components/pages/Connect/FormTitle';

import DataAuthorsParent from './DataAuthorsParent';
import SectionButtonComponent from './Sectionbutton';

const TopAuthorsComponent:React.FC = ()=>{

return (
   <div className="px-[9rem]">
     <div className="py-[5rem] w-full h-fit bg-red-100/30  dark:bg-Secong_dark_color rounded-[2rem] gap-[4rem] flex flex-col">
       <FormTitle  title="Top 10 author of the month" comment="Rating based on customer reviews"/>
       <DataAuthorsParent/>
       <SectionButtonComponent/>
    </div>
   </div>


)


}

export default TopAuthorsComponent