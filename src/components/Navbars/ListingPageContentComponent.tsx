import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';

import NavMenuTriggerComponent from '../componentCustum/NavMenuCustum';
import NavMenuComponent from '../componentCustum/NavMenuLinkCustum';

const ListingPageContent = ()=>{


   return (
<div>
<NavigationMenuList>
    <NavigationMenuItem   >
        <NavMenuTriggerComponent text='Templates'/>
        <NavigationMenuContent className={'flex flex-row'} >
            <NavMenuComponent url='/' text='Online Booking'/>
            <NavMenuComponent url='/realestate' text='Real estate'/>
            <NavMenuComponent url='/realestate' text='Home 3'/>
        </NavigationMenuContent>
    </NavigationMenuItem>
</NavigationMenuList>
</div>



   )

}

export default ListingPageContent