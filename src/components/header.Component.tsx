import LogoComponent from './Logo.Component';
import Navbar1Component from './Navbars/Navbar1.Component';

const HeaderComponent = ()=>{

    return (

        <header className="w-full h-[8.8rem] px-[25rem] items-center flex">
            <LogoComponent/>
           
            <Navbar1Component/>
            
        </header>
    )


}
export default HeaderComponent 
