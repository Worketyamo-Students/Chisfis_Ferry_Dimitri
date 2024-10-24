import LoginForm from "./LoginForm"
import ForgotPass from "./ForgotPass"
import { useState } from "react"
interface Prop{
    onToggleForm:() =>void,
    onToggleSignup: ()=>void,
}

const AuthPassword = ({onToggleForm,onToggleSignup}:Prop) => {
const [isPassword,setIsPassword] = useState(true);

const onTogglePass = () =>{
    setIsPassword(!isPassword);
}
  return (
    <div>
    {isPassword ? (<LoginForm onTogglePass = {onTogglePass} onToggleForm={onToggleForm}/>) : (<ForgotPass onTogglePass = {onTogglePass} onToggleSignup={onToggleSignup}/>)}
    </div>
)
}

export default AuthPassword