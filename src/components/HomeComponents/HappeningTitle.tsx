interface Props{
    subtitle:string,
    title:string
}
const HappeningTitle = ({subtitle,title}:Props) => {
  return (
    <div className="flex flex-col gap-[15px] mb-4">
            <h4 className="text-[1.9rem] text-color_g">{subtitle}</h4>
            <h1 className="text-[3.5rem] font-semibold text-[#1F2937] dark:text-white">{title}</h1>
    </div>
  )
}

export default HappeningTitle