interface title {
    title:string
}
const TitleComponent = ({title}:title) => {
  return (
    <h6 className="font-bold text-[1.6rem]">{title}</h6>
  )
}

export default TitleComponent