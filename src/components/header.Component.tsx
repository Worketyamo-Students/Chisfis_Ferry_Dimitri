import '../index.css';

import LogoComponent from './Logo.Component';
import Navbar1Component from './Navbars/Navbar1.Component';

const HeaderComponent = ()=>{

    return (

        <header className="fixed shadow-sm w-screen py-[2rem] px-[18rem] items-center flex gap-[6rem] border-solid border-b-[0.01rem] border-b-gray-300 dark:bg-dark_color dark:bg-opacity-80 bg-white bg-opacity-80" id='header1'>

            <LogoComponent/>
           
            <Navbar1Component/>
            
        </header>
    )


}
export default HeaderComponent 
