import { Button } from '../ui/button';

interface PropButton {
   text: string;
   titre: string;
}

const ButtonComponent = (props: PropButton) => {
  return (
    <Button 
      title={props.titre} 
      className="w-fit h-[5rem] px-[3rem] rounded-full text-[1.7rem] bg-PrimaryCol hover:bg-SecondCol text-white"
    >
      {props.text}
    </Button>
  );
};

export default ButtonComponent;
