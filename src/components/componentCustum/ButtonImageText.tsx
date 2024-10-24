import { useState } from 'react';

import { Circle } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface PropsButtonImagetext {
    text: string;
}

const ButtonImageTextComponent: React.FC<PropsButtonImagetext> = ({ text }) => {
    const [showImage, setShowImage] = useState(false);
    const [isActive, setIsActive] = useState(false);  // Nouvel état pour la couleur du texte

    const handleMenuOpen = () => {
        setShowImage(true);
        setIsActive(true);  // Quand le menu est ouvert, le texte devient actif
    };

    const handleMenuClose = () => {
        setShowImage(false);
        setIsActive(false);  // Quand le menu se ferme, le texte redevient inactif
    };

    const handleClick = () => {
        setIsActive(!isActive);  // Inverser l'état du texte au clic
    };

    return (
        <div className='flex w-fit h-fit flex-row gap-3 items-center justify-center'>
            {showImage && (
                <Circle className="w-4 h-4 text-black bg-black rounded-full" />
            )}

            <DropdownMenu onOpenChange={(open) => open ? handleMenuOpen() : handleMenuClose()}>
                <DropdownMenuTrigger
                    className={`text-[2rem] border-none ${isActive ? 'text-black' : 'text-navtext1 hover:text-black'}`}
                    onClick={handleClick}  // Gérer le changement d'état au clic
                >
                    {text}
                </DropdownMenuTrigger>
                <DropdownMenuContent className='absolute top-full w-full'>
                    <DropdownMenuLabel>Options</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};

export default ButtonImageTextComponent;
