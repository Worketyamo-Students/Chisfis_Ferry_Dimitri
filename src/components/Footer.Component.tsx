import IfisComponent from "./Footers/ifis.Component"
import '../index.css'
const FooterComponent = () => {
  return (
    <footer className="flex space-x-16 items-center p-[16rem] border-b-4 border-gray-600 bg-red-300" id="footer">
             <IfisComponent/>       
    </footer>
)
}

export default FooterComponent