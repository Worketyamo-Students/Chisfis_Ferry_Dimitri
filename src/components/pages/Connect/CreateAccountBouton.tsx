import UnderlinedBouton from "./UnderlinedBouton"
const CreateAccountBouton = () => {
  return (
    <div className="flex items-center justify-center text-[1.5rem] w-full gap-2 text-gray-500">
        <h6>New user ?</h6>
        <UnderlinedBouton title="create an account"/>
    </div>
  )
}

export default CreateAccountBouton