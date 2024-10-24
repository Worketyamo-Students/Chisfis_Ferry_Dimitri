import MailBox from "./MailBox.Form"
import PasswordBoxForm1 from "./PasswordBoxForm1"
import ContinueBouton from "./ContinueBouton"
import CreateAccountBouton from "./CreateAccountBouton"


const FormContent1 = () => {
  return (
    <div>
        <form className="flex flex-col gap-y-10">
            <MailBox/>
            <PasswordBoxForm1/>
            <ContinueBouton title="continue"/>
            <CreateAccountBouton  boutonTitle="Sign in" question="Already have an account?"/>
        </form>
    </div>
  )
}

export default FormContent1