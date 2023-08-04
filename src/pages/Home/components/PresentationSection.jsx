import devices from '../../../assets/illustration-devices.svg'
import { colors } from '../../../components/utilsGeneral'
import Button from '../../../components/common/Button/Button'

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
            <img src={devices} alt='' style={{transform:'scale(1.2)', left:'20%'}} className='relative md:block'/>
        </article>
    )
}

function TextContainer(){
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
                <Button label={'SCHEDULE A DEMO'} background={colors.red} />
                <span className='font-barlowCondensed text-lg tracking-widest' style={{color:colors.grayishBlue}}>TO SEE A PREVIEW</span>
            </div>

        </article>
    )
}