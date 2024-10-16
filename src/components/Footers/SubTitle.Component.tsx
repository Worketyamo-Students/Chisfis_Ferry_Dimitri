import { Link } from "react-router-dom"

interface Sub{
    Subtitle:string,
    to :string
}
const SubTitleComponent = ({Subtitle, to}:Sub) => {
  return (
    <Link to={to}>
        <h6 className="text-[1.8rem] font-normal  hover:text-black dark:text-white/40 dark:hover:text-white text-gray-400">{Subtitle}</h6>
    </Link>
  )
}

export default SubTitleComponent