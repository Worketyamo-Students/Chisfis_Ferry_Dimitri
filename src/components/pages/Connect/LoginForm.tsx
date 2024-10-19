import FormTitle from "./FormTitle"
import ButtonBlog from "./ButtonBlog"
import OuAvec from "./OuAvec"
import FormContent from "./FormContent"

interface LoginFormProps {
  onToggleForm : () => void;
  onTogglePass : ()=>void;
}
const LoginForm = ({onToggleForm,onTogglePass}:LoginFormProps) => {
  return (
    <div className="flex flex-col shadow-2xl border rounded-[40px] px-[30rem] py-[8rem]">
        <div className="mb-[6rem]">
        <FormTitle title="Login" comment="Welcome to our blog magazine Community"/>
        </div>
        <div>
            <ButtonBlog/>
        </div>
        <div className="my-8"><OuAvec/></div>
        <div><FormContent onToggleForm = {onToggleForm} onTogglePass={onTogglePass}/></div>

    </div>
  )
}

export default LoginForm