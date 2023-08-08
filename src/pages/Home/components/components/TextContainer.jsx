import { useState, useContext } from "react"
import Modal from "../../../../components/common/Modal/Modal"
import { colors } from "../../../../components/utilsGeneral"
import Button from "../../../../components/common/Button/Button"
import ContextAuth from "../../../../components/common/Provider/ContextAuth"
import usePostDeletePut from '../../../../hook/usePostDeletePut'
import Swal from "sweetalert2"
import FormScheduleContainer from "../../../../components/common/FormScheduleContainer/FormScheduleContainer"

export default function TextContainer(){
    const [ modal, setModal ] = useState(false)
    const { state } = useContext(ContextAuth)
    
    const handleModalOpen = () => {
        if(state.length === 0){
            Swal.fire({
                color:'white',
                text:'You need to login first.',
                timer:2400,
                timerProgressBar:true,
                showConfirmButton:false,
                position:'bottom-end',
                backdrop:'transparent',
                background:colors.red
              })
            return
        }
        setModal(true);
    }

    return(
        <article className='flex flex-col gap-5'>
                        
            <div className='flex items-center gap-5'>
                <span className='p-0 text-lg font-bold font-barlowCondensed pl-3 pr-3 rounded-2xl' style={{backgroundColor:colors.veryDarkBlue}}>NEW</span>
                <span className='font-barlowCondensed text-xl tracking-widest' style={{color:colors.grayishBlue}}>MONOGRAPH &nbsp; DASHBOARD</span>
            </div>

            <div>
                <span className='font-barlowCondensed text-5xl font-bold' style={{color:colors.veryDarkBlue}} >POWERFUL INSIGHTS <br/> INTO YOUR TEAM</span>
            </div>

            <div>
                <span className='font-barlowCondensed text-xl' style={{color:colors.darkGrayishBlue}}>Proyect planing and time tracking <br/> for agile teams</span>
            </div>

            <div className='flex items-center justify-start gap-5'>
                
                <Button label={'SCHEDULE A DEMO'} background={colors.red} actionHandler={handleModalOpen} />
                {modal &&(
                    <Modal modalStatus={setModal}>
                        <ScheduleDemo setModal={setModal} state={state} />
                    </Modal>
                    )
                }

                <span className='font-barlowCondensed text-lg tracking-widest' style={{color:colors.grayishBlue}}>TO SEE A PREVIEW</span>
            </div>

        </article>
    )
}
const ScheduleDemo = ({setModal, state}) =>{

    const inputsToSchedule = [
        {
            label:'Full name:',
            type:'text',
            placeholder:'Name and last name',
            name:'fullName'
        },
        {
            label:"Company:",
            type:'text',
            placeholder:'Company name',
            name:'companyName'
        },
        {
            label:'Contact:',
            type:'number',
            placeholder:'Company number',
            name:'contact'
        },
        {
            label:'Email:',
            value:state.email,
            disabled:true,
            name:'email'
        },
        {
            label:'Date:',
            type:'date',
            min:"2023-08-06",
            name:'date'
        }

    ]

    const { error, manipulateData, setError, loading } = usePostDeletePut()
    
    const handlerSubmit = async(dataForm) =>{

        for(const fieldName  in dataForm){
           if(!dataForm[fieldName]){
                setError({
                    message:'Fields can not be empty.'
                })
                return
           }
            setError(false)
        }

        const responseServer = await manipulateData('schedule/new', dataForm, 'POST')
        
        if(responseServer?.success){
          Swal.fire({
            color:'white',
            text:'Correctly scheduled',
            timer:2400,
            timerProgressBar:true,
            showConfirmButton:false,
            position:'bottom-end',
            backdrop:'transparent',
            background:'#00CC66'
          }).then(()=>setModal(false))
        }
    }

    return(
        <FormScheduleContainer onSubmit={handlerSubmit} loadingPost={loading} error={error} inputs={inputsToSchedule} />
    )
    
}