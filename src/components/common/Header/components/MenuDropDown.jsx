import { LinkNavigations } from "./LinkNavigations"
export default function MenuDropDown(){
    return(
        <div className="absolute w-full h-fit flex items-center justify-center z-10">
            <nav className="w-5/6 bg-white h-fit shadow-2xl rounded p-4 absolute top-24 flex flex-col items-center justify-center gap-5" >
               <LinkNavigations />
            </nav>
        </div>
    )
}