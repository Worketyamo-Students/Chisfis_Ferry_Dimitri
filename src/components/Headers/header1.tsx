import '../../index.css'
import ThemeProvider from '@/providers/theme-provider'
import { FaBell } from 'react-icons/fa6'
const Header1 = () => {

  return (
    <header className=" container flex w-full items-center font-poppins dark:text-white">
    <div className='container'>
      <div className=" mx-4 flex items-center justify-between">
        <div className='w-16'>
          <a href="#" className='flex justify-between'><img src="../src/assets/Header/Logo/Group 1.png" alt=".fis_logo" className='h-7' /><h1 className='text-3xl font-extrabold text-black dark:text-white'>.fis</h1></a>
        </div>

        <div className='flex w-full items-center justify-between px-6'>
          <div>
            <nav className='flex items-center right-0 w-full py-4 px-6'>
              <ul className='w-full flex space-x-12 items-center'>
                <li className='duration-300 hover:text-black'><a href="#"><div  className='border decoration-solid bg-[#F3F4F6] px-4 py-2 items-center justify-center flex rounded-3xl dark:text-[#6B7280] dark:hover:text-black'>Home</div></a></li>
                <li  className='duration-300 hover:text-black dark:hover:text-[#6B7280]'><a href="#">Life style</a></li>
                <li  className='duration-300 hover:text-black dark:hover:text-[#6B7280]'><a href="#">Template</a></li>
                <li  className='duration-300 hover:text-black dark:hover:text-[#6B7280]'><a href="#">Archive Page</a></li>
                <li  className='duration-300 hover:text-black dark:hover:text-[#6B7280]'><a href="#">Other Page</a></li>
              </ul>
            </nav>
          </div>

          <div className='flex gap-4 justify-between'>
            <ThemeProvider/>

            <div className='hover:bg-[#6B7280] rounded-[50%] p-2 hover:text-white'>
            <FaBell size={20}/>
            </div>
            
            <div>
              <img src="../src/assets/Header/Circular.png" alt="profile" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </header>

  )
}

export default Header1