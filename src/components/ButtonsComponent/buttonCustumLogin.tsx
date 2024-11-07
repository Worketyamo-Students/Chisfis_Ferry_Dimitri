import { useNavigate } from 'react-router-dom';

import { Button } from '../ui/button';

interface PropsButton {
   chemin: string;
   text: string;
   title: string;
}

const ButtonCustumComponent: React.FC<PropsButton> = ({ chemin, text ,title}) => {
   const navigate = useNavigate();

   const handleClick = () => {
      navigate(chemin);  // Passer `chemin` comme string directement
   };

   return (
      <>
         <Button 
            title={title} 
            className="w-fit h-[5rem] px-[3rem] rounded-full text-[1.7rem] bg-PrimaryCol hover:bg-SecondCol text-white" 
            onClick={handleClick}
         >
            {text}
         </Button>
      </>
   );
};

export default ButtonCustumComponent;
