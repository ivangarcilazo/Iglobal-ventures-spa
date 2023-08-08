import { colors } from "../../../components/utilsGeneral"
import usePostDeletePut from "../../../hook/usePostDeletePut"
import useGet from "../../../hook/useGet"
import { useState, useEffect } from "react"
import Swal from "sweetalert2"
import { Link } from "react-router-dom"
import Modal from '../../../components/common/Modal/Modal'
import AgendaInformer from "./AgendaInformer"
import FormScheduleContainer from "../../../components/common/FormScheduleContainer/FormScheduleContainer"


export default function ContainerAgenda({state}){

    const [ editModalStatus, setEditModalStatus ] = useState(false)

    const { loading, manipulateData } = usePostDeletePut()
    const { getData } = useGet()
    const [ agenda, setAgenda ] = useState([])
    const logged = state.email

    useEffect(()=>{
        const getAgenda = async() =>{
            try {
                const responseServer = await getData(`http://127.0.0.1:3000/schedule/get/${state.email}`)

                if(responseServer){
                    setAgenda(responseServer)
                }else{
                    throw new Error
                }
            } catch (error) {
                Swal.fire({
                    text:'An error unexpected, try again later.',
                    background:colors.red,
                    position:'bottom-right',
                    color:'white',
                    backdrop:'transparent',
                    timer:2500,
                    timerProgressBar:true,
                    showConfirmButton:false
                })
            }
        }
        getAgenda()
    }, [state.email])

    return(
        <>
            <section className="w-full h-96 md:p-5 p-2 overflow-y-scroll flex flex-col gap-4 flex items-center justify-start">
                {
                    loading?(
                        <img src="https://cdn.pixabay.com/animation/2022/07/29/03/42/03-42-22-68_512.gif" width={100} alt="" />
                    ):(
                    agenda.length === 0?(

                        <article className='w-full h-full flex items-center justify-start flex-col gap-10'>
                            <h1 className="text-5xl">Nothing in your agenda...</h1>
                            <Link to={logged?'/':'/login'} className="p-3 text-xl rounded-xl text-white" style={{backgroundColor:colors.red}}>{logged?'Go to home':'Log in'} and schedule a demo here.</Link>
                        </article>

                    ):(

                        agenda.map((schedule)=>{
                        return(
                           <AgendaInformer 
                                schedule={schedule} 
                                setEditModalStatus={setEditModalStatus} 
                                key={schedule._id} setAgenda={setAgenda} 
                                agenda={agenda}
                                manipulateData={manipulateData} 
                            />
                        )
                        
                    })
                    )
                    )
                }
            </section>
            {
            editModalStatus&&(
                <Modal modalStatus={setEditModalStatus} >
                    <EditModal scheduleToEdit={editModalStatus} agenda={agenda} setAgenda={setAgenda} setModalStatus={setEditModalStatus} />
                </Modal>
            )
            }
        </>
    )
}

const EditModal = ( {scheduleToEdit, agenda, setAgenda, setModalStatus}) => {

    const [ inputs, setInputs ] = useState([
        {
            label:'Full name:',
            type:'text',
            placeholder:'Name and last name',
            name:'fullName',
            value:scheduleToEdit.fullName
        },
        {
            label:"Company:",
            type:'text',
            placeholder:'Company name',
            name:'companyName',
            value:scheduleToEdit.companyName
        },
        {
            label:'Contact:',
            type:'number',
            placeholder:'Company number',
            name:'contact',
            value:scheduleToEdit.contact
        },
        {
            label:'Email:',
            value:scheduleToEdit.email,
            disabled:true,
            name:'email'
        },
        {
            label:'Date:',
            type:'date',
            min:"2023-08-06",
            name:'date',
            value:scheduleToEdit.date.split('T')[0]
        }
    ])
    const { manipulateData, error, setError } = usePostDeletePut()

    const handlerChange = (e, index) => {
        
        const toUpdateInput = Array.from(inputs)

        toUpdateInput[index].value = e.target.value

        setInputs(toUpdateInput)
    }

    const handlerUpdate = async(formData) => {
        const updateSchedule = {...formData, _id:scheduleToEdit._id}

        for(const values in updateSchedule){
            if(!updateSchedule[values]){
                setError({
                    message:'Fields can not be empty.'
                })
                return
            }else{
                setError(false)
            }
        }

        const responseData = await manipulateData('schedule/update', {toUpdateSchedule:updateSchedule}, 'PUT')

        if(responseData?.success){
            Swal.fire({
              color:'white',
              text:'Correctly updated',
              timer:2400,
              timerProgressBar:true,
              showConfirmButton:false,
              position:'bottom-end',
              backdrop:'transparent',
              background:'#00CC66'
            }).then(()=>{
                const filterAgenda = agenda.filter((schedule)=>schedule._id !== scheduleToEdit._id)
                setAgenda([...filterAgenda, updateSchedule])
                setModalStatus(false)
            })
          }
    }

    return(
       <FormScheduleContainer error={error} inputs={inputs} onSubmit={handlerUpdate} handlerInputChange={handlerChange} />
    )
}