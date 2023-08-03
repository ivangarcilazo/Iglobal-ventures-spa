import { colors } from "../../utilsGeneral"
import Header from "../header/Header"

export default function Layout({children}){
    return(
        <div>
            <div className="w-1/2 rounded-bl-3xl absolute top-0 right-0 h-96" style={{backgroundColor:colors.lightGrayishBlue, borderBottomLeftRadius:'3rem'}}></div>
            <Header />
            {children}
        </div>
    )
}