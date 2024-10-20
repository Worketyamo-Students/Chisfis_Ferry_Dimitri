import MailBox from "./MailBox.Form"
import PasswordBoxForm from "./passwordBox.Form"
import ContinueBouton from "./ContinueBouton"
import CreateAccountBouton from "./CreateAccountBouton"

const FormContent = () => {
  return (
    <div>
        <form className="flex flex-col gap-y-10">
            <MailBox/>
            <PasswordBoxForm/>
            <ContinueBouton title="continue"/>
            <CreateAccountBouton  boutonTitle="create an account" question="New user?"/>
        </form>
    </div>
  )
}

export default FormContent