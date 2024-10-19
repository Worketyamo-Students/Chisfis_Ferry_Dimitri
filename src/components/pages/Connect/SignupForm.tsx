import FormTitle from "./FormTitle"
import ButtonBlog from "./ButtonBlog"
import OuAvec from "./OuAvec"
import FormContent1 from "./FormContent1"

interface SignupFormProps {
  onToggleForm: () => void;
}

const SignupForm = ({ onToggleForm }: SignupFormProps) => {
  return (
    <div className="flex flex-col shadow-2xl border rounded-[40px] px-[30rem] py-[8rem]">
        <div className="mb-[6rem]">
        <FormTitle title="Signup" comment="Welcome to our blog magazine Community"/>
        </div>
        <div>
            <ButtonBlog/>
        </div>
        <div className="my-8"><OuAvec/></div>
        <div><FormContent1 onToggleForm = {onToggleForm}/></div>
    </div>
  )
};

export default SignupForm;
