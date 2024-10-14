import LogoComponent from '../Logo.Component'
import SocialComponent from './SocialComponent'
import { Link } from 'react-router-dom'
const IfisComponent = () => {
  return (
    <>
        <div className='flex flex-col gap-8'>
            <div>
                <LogoComponent/>
            </div>
            <div className='gap-2'>
            <Link to={'#'}><SocialComponent path= "../../src/assets/facebook.svg" text= 'Facebook'/></Link>
            <Link to={'#'}><SocialComponent path= "../../src/assets/twitter.svg" text= 'Twitter'/></Link>
            <Link to={'#'}><SocialComponent path= "../../src/assets/youtube.svg" text= 'Youtube'/></Link>
            <Link to={'#'}><SocialComponent path= "../../src/assets/instagram.svg" text= 'Instagram'/></Link>

            </div>
        </div>
    </>
)
}

export default IfisComponent