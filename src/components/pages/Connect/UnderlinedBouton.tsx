interface Props {
    title:string,
    onClick : () => void;
}
const UnderlinedBouton = ({title,onClick}:Props) => {
  return (
    <button className="underline font-semibold dark:text-white hover:text-blue-700 duration-300 dark:hover:text-blue-700 dark:hover:duration-700" onClick={onClick}>{title}</button>  
)
}

export default UnderlinedBouton