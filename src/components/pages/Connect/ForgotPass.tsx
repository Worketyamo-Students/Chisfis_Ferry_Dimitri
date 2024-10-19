import FormTitle from "./FormTitle";
import MailBox from "./MailBox.Form";
import ContinueBouton from "./ContinueBouton";
interface ForgotPassProps {
  onTogglePass: () => void; 
  onToggleSignup : ()=> void;
}

const ForgotPass = ({ onTogglePass,onToggleSignup }: ForgotPassProps) => {
  return (
    <div className="flex flex-col shadow-2xl border rounded-[40px] px-[30rem] py-[8rem] text-[1.5rem]">
     <div className="mb-[4rem]">
     <FormTitle title="Forgot password" comment="we will sent password introduction to your email"/> 
     </div>
    <form className="space-y-8 my-10">
      <MailBox/>
      <ContinueBouton title="continue"/>
    </form>
    <div className="flex space-x-2 items-center justify-center">
    <h3>Go back for</h3>
      <div className="space-x-1">
      <button
        className="text-blue-500 hover:text-blue-700 duration-500"
        onClick={onTogglePass}>
        Sign in
      </button> /

      <button
        className="text-blue-500 hover:text-blue-700 duration-500"
        onClick={onToggleSignup}>
        Sign up
      </button>
      </div>
      
    </div>
     
    </div>
  );
};

export default ForgotPass;
