import { LinkNavigations } from "./LinkNavigations"

export default function MenuCommon(){
    return(
        <div className='flex items-center justify-center w-1/2'>
            <nav className="md:flex hidden w-5/6 items-center justify-around">
            <LinkNavigations />
            </nav>
        </div>
    )
}