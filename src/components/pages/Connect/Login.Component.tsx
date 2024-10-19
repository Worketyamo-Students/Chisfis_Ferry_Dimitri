import FooterComponent from "@/components/Footer.Component"
import HeaderComponent from "@/components/header.Component"
import AuthContainer from "./AuthContainer"

const LoginComponent = () => {
  return (
<>
<div className="overflow-x-hidden">
<HeaderComponent/>
<div className="flex items-center justify-center py-[4rem]">
<AuthContainer/> 
</div>
<FooterComponent/>
</div>

</>
  )
}

export default LoginComponent