import closeIcon from '../../../assets/icon-close.svg'
import { useContext } from 'react'
import ContextAuth from '../Provider/ContextAuth'
import { colors } from '../../utilsGeneral'

export default function Modal({children, modalStatus}){
    const { state } = useContext(ContextAuth)

    return(
        <div className="fixed w-screen h-screen flex items-center justify-center top-0 left-0 z-20  font-barlow" 
             style={{backgroundColor:'rgba(0,0,0,0.4)', WebkitBackdropFilter:'blur(3px)', backdropFilter:'blur(3px)'}}
        >
            <article className="w-fit h-fit rounded-xl bg-white p-5">
                
                <div className='w-full flex items-center justify-between h-fit'>

                    <h2 className='text-4xl font-barlowCondensed' style={{color:colors.darkGrayishBlue}}>Welcome <b>{state.username}</b> </h2>

                    <button onClick={()=>modalStatus(false)}>
                        <img src={closeIcon} width={25} alt="" />
                    </button>

                </div>
                
                {children}
            </article>
        </div>
    )
}