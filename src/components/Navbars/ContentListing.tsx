import NavMenuTriggerComponent from '../componentCustum/NavMenuCustum';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
} from '../ui/navigation-menu';

const ContentListing =()=>{

    return(

         <div className='w-fit h-fit'>
             <NavigationMenu className={'w-fit text-nowrap'}>
                <NavigationMenuList>
                    <NavigationMenuItem  className={'bg-slate-500'}  >
                        <NavMenuTriggerComponent text='Fives Columns'/>
                        <NavigationMenuContent className='bg-slate-500 w-fit absolute'>
                          <p>PPPPPffffffffffff</p>
                          <p>PPPPP</p>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>

            </div>  
    )


}

export default ContentListing