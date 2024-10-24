import { Badge } from "@/components/ui/badge"

const JoinNewsLetter = () => {
  return (
    <div className="items-center justify-center flex gap-[5rem]">
        <div className="flex flex-col gap-10 ">
            <div className='gap-4 flex flex-col'>
                <h1 className="text-[3.5rem] font-semibold dark:text-white">Join our newsletter 🎉</h1>
                <h6 className='text-[1.8rem] font-normal dark:text-white/40 text-gray-400'>Read and share new perspectives on just about any topic. <br /> Everyone’s welcome.</h6>
            </div>

            <div className="flex flex-col space-y-7">
               <div className="flex space-x-6 items-center"><Badge className="bg-[#DBEAFE] hover:bg-[#DBEAFE] text-[#1E40AF] px-4 py-2 text-[1.3rem] rounded-[50px] font-semibold">01</Badge> <h3 className="text-[1.6rem]">Get more discount</h3></div> 
               <div className="flex space-x-6 items-center"><Badge className="bg-[#FEE2E2] hover:bg-[#FEE2E2]  text-[#991B1B] px-4 py-2 text-[1.3rem] rounded-[50px] font-semibold">02</Badge> <h3 className="text-[1.6rem]">Get premium magazines</h3></div> 
            </div>

            <div className="relative flex items-center"><input type="email" placeholder="example@gmail.com" className="p-6 border-solid border rounded-[30px] w-[40rem] border-[#e5e7eb] shadow-sm text-[1.3rem] dark:bg-transparent dark:border-gray-500" /> <img src="../../../../src/assets/JoinNewsarrow.svg" alt="arrow" className="absolute left-[35.5rem]"/></div>
        </div>

        <div><img src="../../../../src/assets/joinNews.svg" alt="join News image" /></div>
    </div>
  )
}

export default JoinNewsLetter