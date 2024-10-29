import { DatasAuthors } from '@/functions/dataAuthors';

import DataAuthorsComponent from './DataAuthors';

const DataAuthorsParent:React.FC =()=>{


    return (
   <div className=" w-full h-fit flex-wrap flex flex-row gap-[4rem] justify-center items-center"> 
        <DataAuthorsComponent TableData={DatasAuthors} />
   </div>
    )
} 
export default DataAuthorsParent