import FooterComponent from "@/components/Footer.Component"
import LoginForm from "./LoginForm"
import HeaderComponent from "@/components/header.Component"
const LoginComponent = () => {
  return (
<>
<div className="overflow-x-hidden">
<HeaderComponent/>
<div className="flex items-center justify-center py-[4rem]">
<LoginForm/>
</div>
<FooterComponent/>
</div>

</>
  )
}

export default LoginComponent