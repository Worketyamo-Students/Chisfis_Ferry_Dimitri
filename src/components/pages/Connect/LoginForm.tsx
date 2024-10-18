import FormTitle from "./FormTitle"
import ButtonBlog from "./ButtonBlog"
import OuAvec from "./OuAvec"
import FormContent from "./FormContent"
const LoginForm = () => {
  return (
    <div className="flex flex-col shadow-2xl border rounded-[40px] p-[30rem]">
        <div className="mb-[6rem]">
        <FormTitle title="Login" comment="Welcome to our blog magazine Community"/>
        </div>
        <div>
            <ButtonBlog/>
        </div>
        <div className="my-8"><OuAvec/></div>
        <div><FormContent/></div>
    </div>
  )
}

export default LoginForm