import { Link } from 'react-router-dom';

import { NavigationMenuLink } from '../ui/navigation-menu';

interface LiensProps extends React.LinkHTMLAttributes<HTMLInputElement>{

    url: string;
    text:string;
    }

const NavMenuComponent:React.FC<LiensProps> = (
    {
    url,
    text,
    }
) => {

    return (
        <NavigationMenuLink className={'w-full whitespace-nowrap h-fit text-[1.4rem] rounded-md hover:bg-neutral-100 flex items-center px-5 py-2 font-Poppins text-navtext1 font-normal'}>
            <Link to={url} >{text}</Link>
        </NavigationMenuLink>
    )
}

export default NavMenuComponent