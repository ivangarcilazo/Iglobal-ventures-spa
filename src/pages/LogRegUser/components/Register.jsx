import ActionForm from "./ActionForm";
import usePostDeletePut from "../../../hook/usePostDeletePut";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function Register(){
    const inputs = [
        {
            label:'Username',
            placeholder:'Your username',
            type:'text'
        },
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
    const {loading, error, setError, manipulateData} = usePostDeletePut()
    const navigate = useNavigate()
    
    const handlerSubmit = async(evt) => {
        evt.preventDefault()
        const target = evt.target
        const dataRegister = {
            username:target[0].value,
            email:target[1].value,
            password:target[2].value
        }
        for(const formValue in dataRegister){
            if(!dataRegister[formValue]){
                setError({
                    message:'Fields can not be empty.'
                })
                return
            }
            setError(false)
        }

        const responseServer = await manipulateData('users/register', dataRegister, 'POST')
        if(responseServer){
            Swal.fire({
                color:'white',
                text:'You registered successfully.',
                timer:2000,
                timerProgressBar:true,
                showConfirmButton:false,
                position:'bottom-end',
                backdrop:'transparent',
                background:'#00CC66'
              }).then(()=>navigate('/users/login'))
        }

    }
    
    return <ActionForm inputs={inputs} error={error} loading={loading} onSubmit={handlerSubmit} actionButton={'Register'} />
}