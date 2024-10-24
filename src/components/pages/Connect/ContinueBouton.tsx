interface Props {
    title:string
}
const ContinueBouton = ({title}:Props) => {
  return (
    <button className="w-full py-6 items-center justify-center text-white dark:text-white bg-[#524ae8] hover:bg-[#4F46E5] rounded-[58px] text-[1.8rem]">{title}</button>
)
}

export default ContinueBouton