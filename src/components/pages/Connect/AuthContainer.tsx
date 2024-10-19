import { useState } from "react"
import SignupForm from "./SignupForm"
import AuthPassword from "./AuthPassword";

const AuthContainer = () => {
    const [isLogin, setIsLogin] = useState(true);

    const handleToggleForm = () =>{
        setIsLogin(!isLogin);
    }

  return (
    <div>
        {isLogin ? (<AuthPassword onToggleForm = {handleToggleForm} onToggleSignup={handleToggleForm}/>) : (<SignupForm onToggleForm={handleToggleForm}/>)}
    </div>
)
}

export default AuthContainer