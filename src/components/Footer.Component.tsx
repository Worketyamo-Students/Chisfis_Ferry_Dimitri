import IfisComponent from "./Footers/ifis.Component"
import FooterSubComponent from "./Footers/FooterSubComponent"
import '../index.css'
const FooterComponent = () => {
  return (
    <footer className="flex justify-between items-center p-[16rem] flex-row" id="footer">
             <IfisComponent/> 
             <FooterSubComponent title="Getting started" title1="Installation" title2="Release Notes" title3="Upgrade Guide" title4="Browser Support" title5="Editor Support" to1="#" to2="#" to3="#" to4="#" to5="#"/> 
             <FooterSubComponent title="Explore" title1="Design Features" title2="Prototyping" title3="Design systems" title4="Pricing" title5="Security" to1="#" to2="#" to3="#" to4="#" to5="#"/> 
             <FooterSubComponent title="Resources" title1="Best practices" title2="support" title3="Developers" title4="learn design" title5="Releases" to1="#" to2="#" to3="#" to4="#" to5="#"/> 
             <FooterSubComponent title="Community" title1="Discussion Forums" title2="Code of Conduct" title3="Community Resources" title4="Contributing" title5="Concurrent Mode" to1="#" to2="#" to3="#" to4="#" to5="#"/> 

    </footer>
)
}

export default FooterComponent