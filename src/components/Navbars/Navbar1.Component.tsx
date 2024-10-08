import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';

import { ButtonIcon } from '../BlackWhiteButton';
import PopoverCustum from '../ButtonIcon';
import NavMenuTriggerComponent from '../componentCustum/NavMenuCustum';
import NavMenuComponent from '../componentCustum/NavMenuLinkCustum';

const Navbar1Component = () => {

    return (

        <nav className=" flex flex-row gap-3 items-center">
            <NavigationMenu >
                <NavigationMenuList>
                    <NavigationMenuItem   >
                        <NavMenuTriggerComponent text='Home'/>
                        <NavigationMenuContent  className={'flex flex-col p-[1rem] w-fit h-fit gap-2'}>
                            <NavMenuComponent url='/' text='Online Booking'/>
                            <NavMenuComponent url='/realestate' text='Real estate'/>
                            <NavMenuComponent url='/realestate' text='Home 3'/>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <NavigationMenu >
                <NavigationMenuList>
                    <NavigationMenuItem   >
                        <NavMenuTriggerComponent text='Fives Columns'/>
                        <NavigationMenuContent  className={'flex flex-col p-[1rem] w-fit h-fit gap-2'}>
                            <NavMenuComponent url='/' text='Online Booking'/>
                            <NavMenuComponent url='/realestate' text='Real estate'/>
                            <NavMenuComponent url='/realestate' text='Home 3'/>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <NavigationMenu >
                <NavigationMenuList>
                    <NavigationMenuItem   >
                        <NavMenuTriggerComponent text='Listing Pages'/>
                        <NavigationMenuContent  className={'flex flex-col p-[1rem] w-fit h-fit gap-2'}>
                            <NavMenuComponent url='/' text='Online Booking'/>
                            <NavMenuComponent url='/realestate' text='Real estate'/>
                            <NavMenuComponent url='/realestate' text='Home 3'/>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <NavigationMenu >
                <NavigationMenuList>
                    <NavigationMenuItem   >
                        <NavMenuTriggerComponent text='Templates'/>
                        <NavigationMenuContent  className={'flex flex-col p-[1rem] w-fit h-fit gap-2'}>
                            <NavMenuComponent url='/' text='Online Booking'/>
                            <NavMenuComponent url='/realestate' text='Real estate'/>
                            <NavMenuComponent url='/realestate' text='Home 3'/>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <NavigationMenu >
                <NavigationMenuList>
                    <NavigationMenuItem   >
                        <NavMenuTriggerComponent text='Other Pages'/>
                        <NavigationMenuContent  className={'flex flex-col p-[1rem] w-fit h-fit gap-2'}>
                            <NavMenuComponent url='/' text='Online Booking'/>
                            <NavMenuComponent url='/realestate' text='Real estate'/>
                            <NavMenuComponent url='/realestate' text='Home 3'/>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
         <ButtonIcon/>
         <PopoverCustum/>

        </nav>
    )
}
export default Navbar1Component