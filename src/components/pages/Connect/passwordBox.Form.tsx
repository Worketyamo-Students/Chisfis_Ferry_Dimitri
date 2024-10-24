import { useNavigate } from "react-router-dom"
const PasswordBoxForm = () => {
  const navigate = useNavigate()
  return (
    <div>
        <div className="flex justify-between mb-2">
        <h2 className="text-[1.7rem] dark:text-white text-gray-500">password</h2>
        <button className="text-[1.7rem] dark:text-white text-gray-500 underline hover:text-blue-700 duration-300 dark:hover:text-blue-700 dark:hover:duration-700" onClick={()=>{navigate('/forgot-pass')}}>Forgot password?</button>
        </div>
        <input type="password" placeholder="******" className="p-6 border-solid border rounded-[16px] w-full border-[#e5e7eb] shadow-sm text-[1.3rem] dark:bg-transparent dark:border-gray-500" />
    </div>
  )
}

export default PasswordBoxForm