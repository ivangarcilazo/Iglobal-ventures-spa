import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import usePostDeletePut from "../../../hook/usePostDeletePut"
import ContextAuth from "../../../components/common/Provider/ContextAuth"
import ActionForm from "./ActionForm"


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
    const { error, loading, manipulateData, setError } = usePostDeletePut()

    const handlerSubmit = async(e) => {
        e.preventDefault()
        const email = e.target[0].value
        const password = e.target[1].value

        if(!email || !password){
            setError({message:'Fields can not be empty'})
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
        <ActionForm onSubmit={handlerSubmit} loading={loading} error={error} inputs={labelsForm} actionButton={'Login'} />
    )
}
