import { AiOutlineFacebook } from "react-icons/ai";

import '../../index.css'
interface SocialComponentProps{
    path:string;
    text:string;
}
const SocialComponent = ({path,text}:SocialComponentProps) => {
  return (
    <div className='flex space-x-4 hover:text-black dark:text-white/40 dark:hover:text-white text-gray-400'>
      <div><AiOutlineFacebook/>{path}</div>    
      <h6 className="text-[1.8rem] font-normal">{text}</h6>
    </div>
  )
}

export default SocialComponent