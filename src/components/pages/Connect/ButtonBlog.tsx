import { AiOutlineFacebook, AiOutlineTwitter} from 'react-icons/ai';
import { FcGoogle } from "react-icons/fc";

import { Link } from 'react-router-dom';

const blockButton = [
    {content:"Continue with Facebook",icon :<AiOutlineFacebook color='#3b5998' size={24}/>, to : "/7"},
    {content:"Continue with Google",icon :<FcGoogle size={24}/> , to : "/"},
    {content:"Continue with Twitter",icon : <AiOutlineTwitter color='#000000' size={24}/>, to : "/"}
]
const ButtonBlog = () => {
  return (
    <div className='space-y-6'>
        {blockButton.map((bouton,index)=>{
                
            return(

                <Link key={index} to={bouton.to} className='relative flex items-center justify-center space-x-2 dark:bg-[#1f2937] dark:text-white text-black w-full py-5 px-4 bg-[#eef2ff] rounded-[16px] hover:bottom-[1px] duration-1000'>
                <div className='absolute left-4'>{bouton.icon}</div>
                <span className='text-center text-[1.4rem]'>{bouton.content}</span>
                </Link>
            )
        })}
    </div>
  )
}

export default ButtonBlog