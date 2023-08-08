import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { colors } from "../../components/utilsGeneral"
import usePostDeletePut from "../../hook/usePostDeletePut"
import ContextAuth from "../../components/common/Provider/ContextAuth"


const labelsForm = [
    {
        label:'Email',
        type:'email',
        placeholder:'Email'
    },
    {
        label:'Password',
        type:'password',
        placeholder:'Password'
    }
]

export default function Login(){
    const { dispatch } = useContext(ContextAuth)
    const navigate = useNavigate()
    const [ errorForm, setErrorForm ] = useState(false)
    const { error, loading, manipulateData } = usePostDeletePut()

    const handlerSubmit = async(e) => {
        e.preventDefault()
        const email = e.target[0].value
        const password = e.target[1].value

        if(!email || !password){
            setErrorForm({message:'Fields can not be empty'})
            return
        }

        const userData = ({
           email:email,
           password:password
        })

        const responseUserData = await manipulateData('users/login', userData, 'POST')
        
        if(!responseUserData) return
        
        dispatch({
            type:'ADD_DATA',
            payload:responseUserData
        })
        
        navigate('/')

    }

    return(
        <main className="w-full h-screen flex items-center justify-center">
            
            <div className="w-1/2 rounded-bl-3xl absolute top-0 right-0 h-96 " style={{backgroundColor:colors.lightGrayishBlue, borderBottomLeftRadius:'3rem', zIndex:-1}}></div>

            <article className="w-5/6 h-96 shadow-xl rounded-xl font-barlow p-3 md:w-2/6" style={{backgroundColor:colors.darkGrayishBlue}}>

                <div className="flex flex-col gap-3">
                    <h1 className="text-5xl">Login</h1>
                    <span>Login and access more functions.</span>
                </div>

                <Form error={error} errorForm={errorForm} loading={loading} handlerSubmit={handlerSubmit} />

            </article>
        </main>
    )
}

const Form = ({handlerSubmit, errorForm, error, loading}) =>{
    return(
        <form action="POST" className="w-full flex items-start justify-around h-64 flex-col pl-3 pt-5" onSubmit={handlerSubmit} >
            {
                labelsForm.map((input)=>(
                    <div key={input.label} className="flex flex-col w-5/6">
                        <label htmlFor="" className="text-2xl">{input.label}</label>
                        <input type={input.type} style={{color:colors.darkGrayishBlue}} placeholder={input.placeholder} className="p-1 w-full rounded" />
                    </div>
                ))
            }

            <div className="w-full h-fit flex items-center justify-around">
                <input className="bg-white p-1 pl-4 pr-4 text-xl cursor-pointer rounded " style={{color:colors.grayishBlue}} type="submit" value={loading?'Login...':'Login'} />
                {(errorForm||error)&&<span className="p-1 rounded-lg" style={{backgroundColor:colors.red}}>{errorForm.message || error.message}</span>}
            </div>

        </form>
    )
}