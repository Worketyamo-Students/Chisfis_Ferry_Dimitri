interface title {
    title :string,
    comment : string,
}

const TextandComment = ({title,comment}:title) => {
  return (
    <div className='gap-4 flex flex-col items-center'>
    <h1 className="text-[2rem] font-bold dark:text-white">{title}</h1>
    <h6 className='text-[1rem] font-normal dark:text-white/40 text-gray-400'>{comment}</h6>
    </div>
  )
}

export default TextandComment