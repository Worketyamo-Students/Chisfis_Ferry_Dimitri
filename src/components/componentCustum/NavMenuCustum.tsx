import { NavigationMenuTrigger } from '@/components/ui/navigation-menu';

interface TextProps extends React.LinkHTMLAttributes<HTMLInputElement>{

    text:string;
    }

const NavMenuTriggerComponent:React.FC<TextProps> = ({
     text
    })=>{

    return (
        <NavigationMenuTrigger  className={'w-fit h-[4rem] rounded-full hover:bg-neutral-100 font-Poppins text-[1.8rem] text-navtext1 hover:text-neutral-900 font-normal'}>{text}</NavigationMenuTrigger>
    )
}

export default NavMenuTriggerComponent