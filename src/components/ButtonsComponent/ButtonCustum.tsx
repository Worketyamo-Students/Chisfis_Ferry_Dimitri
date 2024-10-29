import { useNavigate } from 'react-router-dom';

import { Button } from '../ui/button';

interface ButtonProps {
  title: string;
  className?: string;
  onClick?: () => void;
  navigateTo?: string;
}

const ButtonComponent: React.FC<ButtonProps> = ({ title, className, onClick, navigateTo }) => {
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
      className={`w-fit h-[5rem] px-[3rem] rounded-full text-[1.7rem] bg-PrimaryCol hover:bg-SecondCol text-white ${className}`}
      onClick={handleClick}
    >
      {title}
    </Button>
  );
};

export default ButtonComponent;
