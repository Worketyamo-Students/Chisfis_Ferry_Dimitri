import { useNavigate } from "react-router-dom"
interface Props {
    title:string,
}
const UnderlinedBouton = ({title}:Props) => {
  const navigate = useNavigate();
  const verify = ()=>{
    if (title == "create an account") {
      navigate('/sign-up')
    }else if (title == "Sign in"){
      navigate('/login')
    }
  }

  return (
    <button className="underline font-semibold dark:text-white hover:text-blue-700 duration-300 dark:hover:text-blue-700 dark:hover:duration-700" onClick={verify}>{title}</button>  
)
}

export default UnderlinedBouton