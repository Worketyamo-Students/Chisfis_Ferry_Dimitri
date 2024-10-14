import '../index.css';

import LogoComponent from './Logo.Component';
import Navbar1Component from './Navbars/Navbar1.Component';

const HeaderComponent = ()=>{

    return (

        <header className="w-full h-[8.8rem] px-[18rem] items-center flex gap-[6rem]" id='header1'>

            <LogoComponent/>
           
            <Navbar1Component/>
            
        </header>
    )


}
export default HeaderComponent 
