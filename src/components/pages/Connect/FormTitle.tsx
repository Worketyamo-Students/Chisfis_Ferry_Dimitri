interface title {
    title :string,
    comment : string,
}

const FormTitle = ({title,comment}:title) => {
  return (
    <div className='gap-4 flex flex-col items-center'>
    <h1 className="text-[4.5rem] font-bold dark:text-white">{title}</h1>
    <h6 className='text-[1.8rem] font-normal dark:text-white/40 text-gray-400'>{comment}</h6>
    </div>
  )
}

export default FormTitle