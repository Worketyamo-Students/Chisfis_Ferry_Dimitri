interface title {
    title :string,
    comment : string,
}

const Carousel1Titre= ({title,comment}:title) => {
  return (
    <div className='gap-4 flex flex-col'>
    <h1 className="text-[4.5rem] font-bold dark:text-white">{title}</h1>
    <h6 className='text-[1.8rem] font-normal dark:text-white/40 text-gray-400'>{comment}</h6>
    </div>
  )
}

export default Carousel1Titre