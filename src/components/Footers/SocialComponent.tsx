import { AiOutlineFacebook, AiOutlineTwitter, AiOutlineYoutube, AiOutlineInstagram } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const socialLinks = [
  {name:'Facebook',icon: AiOutlineFacebook, url:'/'},
  {name:'Twitter',icon: AiOutlineTwitter, url:'/'},
  {name:'Youtube',icon: AiOutlineYoutube, url:'#'},
  {name:'Instagram',icon: AiOutlineInstagram, url:'#'},
];
const SocialComponent = () => {
  return (
    <div className='space-y-6'>
      {socialLinks.map((social,index)=>{
        const IconComponent = social.icon;

        return(
          <Link key={index} to={social.url} className='flex items-center space-x-2 text-[1.8rem] font-normal  hover:text-black dark:text-white/40 dark:hover:text-white text-gray-400'>
          <IconComponent size={24}/>
          <span>{social.name}</span>
          </Link>
        )
      })}
    </div>
  )
}

export default SocialComponent