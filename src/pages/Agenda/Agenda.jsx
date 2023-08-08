import { colors } from "../../components/utilsGeneral"
import { useContext } from "react"
import ContextAuth from "../../components/common/Provider/ContextAuth"
import ContainerAgenda from "./components/ContainerAgenda"

export default function Agenda(){

    const { state } = useContext(ContextAuth)

    return(
        <main className="w-full h-screen md:p-32 pt-28 pl-5 pr-5 font-barlowCondensed flex flex-col gap-10" style={{color:colors.darkGrayishBlue}}>
            <div className="w-1/2 rounded-bl-3xl absolute top-0 right-0 h-96 " style={{backgroundColor:colors.lightGrayishBlue, borderBottomLeftRadius:'3rem', zIndex:-1}}></div>

            <div className="flex flex-col gap-3">
                <h1 className="text-5xl font-bold">MY AGENDA</h1>
                <span className="text-2xl"><b style={{textDecoration:`underline 1px solid ${colors.red}`}}>{state.username}</b> know about your agenda, scheduled times and more. </span>
            </div>

            <ContainerAgenda state={state} />          

        </main>
    )
}

