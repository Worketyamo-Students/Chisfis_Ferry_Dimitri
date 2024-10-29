import { Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';

interface ButtonProps {
  title: string;
  className?: string;
  onClick?: () => void;
  navigateTo?: string;
}

const ButtonLoading: React.FC<ButtonProps> = ({ title, className, onClick, navigateTo }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (navigateTo) {
      navigate(navigateTo);
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <Button
      title={title}
      className={`w-fit h-[5rem] px-[3rem] rounded-full text-[1.7rem] bg-white text-gray-700 dark:text-white hover:bg-white dark:bg-dark_color border-solid border-[0.1rem] border-navtext1 ${className}`}
      onClick={handleClick}
    >
    <Loader2 className="mr-2 h-[2rem] w-[2rem] animate-spin" />
           
      {title}
    </Button>
  );
};

export default ButtonLoading;
