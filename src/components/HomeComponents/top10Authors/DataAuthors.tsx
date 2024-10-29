import { FaStar } from 'react-icons/fa';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@radix-ui/react-avatar';

import BadgeComponent from './BadgeCustum';
import TextandComment from './Textandcomment';

interface AuthorProps {
  image: string;
  name: string;
  ville: string;
}

interface Mydata {
  TableData: AuthorProps[];
}

const DataAuthorsComponent: React.FC<Mydata> = ({ TableData }) => {
  return (
    <>
      {TableData.map((author, index) => (
        <div
          key={index}
          className="w-[20rem] h-[25rem] rounded-[2rem] bg-white dark:bg-dark_color border-solid border-[0.1rem]
          border-navtext1 hover:drop-shadow-lg hover:border-none hover:shadow-slate-900
          flex flex-col items-center justify-center p-[1rem] gap-[1rem]"
        >
          <div className="rounded-full w-[8rem] h-[8rem] dark:bg-slate-950 bg-slate-400">
            <Avatar className="w-full h-full rounded-full flex justify-center items-center">
              <AvatarImage className="rounded-full" src={author.image} />
              <AvatarFallback className='text-[2rem]'>img</AvatarFallback>
            </Avatar>
          </div>
          <TextandComment title={author.name} comment={author.ville} />
          <BadgeComponent text="4.6" image={<FaStar className="text-yellow-400 text-[1.5rem]" />} style="" />
        </div>
      ))}
   </>
  );
};

export default DataAuthorsComponent;
