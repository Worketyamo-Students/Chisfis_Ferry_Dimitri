import '../../index.css'
interface SocialComponentProps{
    path:string;
    text:string;
}
const SocialComponent = ({path,text}:SocialComponentProps) => {
  return (
    <div className='flex space-x-4 hover:text-black dark:text-white/40 dark:hover:text-white text-gray-300'>
        <img src={path} className="w-9 text-gray-500" id="social"/>
        <h6 className="text-[2rem] font-light">{text}</h6>
    </div>
  )
}

export default SocialComponent