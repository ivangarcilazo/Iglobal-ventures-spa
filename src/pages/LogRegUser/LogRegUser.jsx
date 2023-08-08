import { colors } from "../../components/utilsGeneral"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import Login from "./components/Login"
import Register from "./components/Register"

export default function LogRegUser(){
    const { action } = useParams()

    return(
        <main className="w-full h-screen flex items-center justify-center">
            
            <div className="w-1/2 rounded-bl-3xl absolute top-0 right-0 h-96 " style={{backgroundColor:colors.lightGrayishBlue, borderBottomLeftRadius:'3rem', zIndex:-1}}></div>

            <article className="w-5/6 h-fit shadow-2xl rounded-xl font-barlow p-3 md:w-2/6" style={{backgroundColor:'rgba(0,0,0,.7)', WebkitBackdropFilter:'blur(3px)', backdropFilter:'blur(3px)'}}>

                <div className="flex flex-col gap-3">
                    <h1 className="text-5xl font-bold font-barlow tracking-widest">{action==='login'?'Login':'Register'}</h1>
                    <span>{action==='login'?'Login':'Register'} and access more functions.</span>
                </div>
                {
                action === 'login'?<Login />:<Register />
                }
                <Link className="underline hover:text-white" to={action==='login'?'/users/register':'/users/login'}>{action==='login'?'New? Register here.':'Have an account? Login here.'}</Link>
            </article>
        </main>
    )
}