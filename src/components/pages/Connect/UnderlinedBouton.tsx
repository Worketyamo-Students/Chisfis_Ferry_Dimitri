interface Props {
    title:string
}
const UnderlinedBouton = ({title}:Props) => {
  return (
    <button className="underline font-semibold dark:text-white hover:text-blue-700 duration-300 dark:hover:text-blue-700 dark:hover:duration-700">{title}</button>  
)
}

export default UnderlinedBouton