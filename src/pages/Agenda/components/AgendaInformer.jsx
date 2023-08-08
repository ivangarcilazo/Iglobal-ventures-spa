import Swal from "sweetalert2"
import deleteIcon from '../../../assets/icon-delete.svg'
import editIcon from '../../../assets/icon-edit.svg'


export default function AgendaInformer ({schedule, setEditModalStatus, setAgenda, agenda, manipulateData}){

    const handlerDelete = async(scheduleToDelete) =>{
        const deleteSchedule = {
            _id:scheduleToDelete._id
        }

        Swal.fire({
            title:'Do you want to cancel this agenda?',
            text:'This action cannot be undone',
            showConfirmButton:'true',
            confirmButtonText:'Yes.',
            showCancelButton:true
        }).then(async(res)=>{
            if(res.isConfirmed){
                const responseServer = await manipulateData('schedule/delete', deleteSchedule, 'DELETE')

                if(responseServer?.success){
                    const newAgenda = agenda.filter((item)=> item._id !== deleteSchedule._id)
                    setAgenda(newAgenda)
                }

            }
        })

    }

    const dateFormated = schedule.date.split("T")[0];

    return(
        <article key={schedule._id} className="w-full rounded-xl bg-white p-3 shadow-xl flex flex-col gap-3">

            <div className="w-full h-fit">
                <h4 className="text-3xl font-bold">{dateFormated}</h4>
            </div>

            <div className="flex">

                <div className="w-5/6 h-fit flex flex-col gap-3">
                    
                    <span className="text-xl">Company: {schedule.companyName}</span>
                    <span className="text-xl">Designed partner: {schedule.partner}</span>
                    <span className="text-xl">Requested by: {schedule.fullName}</span>

                    <div className="w-full flex items-center justify-around">
                        <span className="text-xl">{schedule.email}</span>
                        <span className="text-xl">Contact: {schedule.contact}</span>
                    </div>

                </div>

                <div className="w-fit h-42 flex flex-col items-center justify-around">

                    <button onClick={()=>setEditModalStatus(schedule)}>
                        <img src={editIcon} width={30} alt="" />
                    </button>

                    <button onClick={()=>handlerDelete(schedule)}>
                        <img src={deleteIcon} width={30} alt="" />
                    </button>
                    
                </div>
            </div>

        </article>
    )
}