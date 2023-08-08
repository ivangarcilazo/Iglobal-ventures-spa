import devices from '../../../assets/illustration-devices.svg'
import { colors } from '../../../components/utilsGeneral'
import TextContainer from './components/TextContainer'

export default function PresentationSection(){
    return(
        <section className='w-full flex flex-col items-center justify-center md:flex-row-reverse md:justify-between md:gap-0 md:h-screen'>

            <div className="w-1/2 rounded-bl-3xl absolute top-0 right-0 h-96 " style={{backgroundColor:colors.lightGrayishBlue, borderBottomLeftRadius:'3rem', zIndex:-1}}></div>
            
            <ImageContainer />

            <div className='h-96 pl-4 pr-4 md:w-1/2 md:h-full md:flex items-center justify-center'>
                <TextContainer />
            </div>
            
        </section>
    )
}

function ImageContainer(){
    return(
        <article className='w-full h-96 overflow-hidden flex items-center justify-start md:justify-self-end md:h-full md:w-1/2'>
            <img src={devices} alt='' style={{transform:'scale(1.2)', left:'23%'}} className='relative md:block'/>
        </article>
    )
}

