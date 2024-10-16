import LogoComponent from '../Logo.Component'
import SocialComponent from './SocialComponent'
import { Link } from 'react-router-dom'
const IfisComponent = () => {
  return (
    <>
        <div className='flex flex-col space-y-8'>
            <div className="self-start mb-8">
                <LogoComponent/>
            </div>
            <div className='space-y-8'>
            <Link to={'#'}><SocialComponent path= "AiOutlineFacebook" text= 'Facebook'/></Link>
            <Link to={'#'}><SocialComponent path= "../../src/assets/twitter.svg" text= 'Twitter'/></Link>
            <Link to={'#'}><SocialComponent path= "../../src/assets/youtube.svg" text= 'Youtube'/></Link>
            <Link to={'#'}><SocialComponent path= "../../src/assets/instagram.svg" text= 'Instagram'/></Link>

            </div>
        </div>
    </>
)
}

export default IfisComponent