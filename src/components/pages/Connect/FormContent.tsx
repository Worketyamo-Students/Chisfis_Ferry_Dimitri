import MailBox from "./MailBox.Form"
import PasswordBoxForm from "./passwordBox.Form"
import ContinueBouton from "./ContinueBouton"
import CreateAccountBouton from "./CreateAccountBouton"

interface FormContentProps {
    onToggleForm : ()=> void;
    onTogglePass : ()=>void;

}
const FormContent = ({onToggleForm,onTogglePass}:FormContentProps) => {
  return (
    <div>
        <form className="flex flex-col gap-y-10">
            <MailBox/>
            <PasswordBoxForm toggleFormPass={onTogglePass}/>
            <ContinueBouton title="continue"/>
            <CreateAccountBouton onToggleForm ={onToggleForm} boutonTitle="create an account" question="New user?"/>
        </form>
    </div>
  )
}

export default FormContent