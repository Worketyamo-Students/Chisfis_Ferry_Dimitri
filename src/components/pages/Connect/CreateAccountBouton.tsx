import UnderlinedBouton from "./UnderlinedBouton"

interface  CreateAccountBoutonProps {
    question:string,
    boutonTitle:string,
}
const CreateAccountBouton = ({question,boutonTitle} : CreateAccountBoutonProps) => {
  return (
    <div className="flex items-center justify-center text-[1.5rem] w-full gap-2 text-gray-500">
        <h6>{question}</h6>
        <UnderlinedBouton title={boutonTitle} />
    </div>
  )
}

export default CreateAccountBouton