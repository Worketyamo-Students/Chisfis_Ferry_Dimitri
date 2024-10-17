import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';
const ButtonComponent = ()=>{
const navigate = useNavigate();

   const handleClick = () =>{
      navigate('/login')
   }
 return (
   <>
    <Button title='SignUp' className=" w-fit h-[5rem] px-[3rem] rounded-full text-[1.7rem] bg-PrimaryCol hover:bg-SecondCol text-white" onClick={handleClick}>SignUp</Button>
    </>
 )
}
 export default ButtonComponent