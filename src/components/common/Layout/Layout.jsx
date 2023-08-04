import { colors } from "../../utilsGeneral"
import Header from "../header/Header"

export default function Layout({children}){
    return(
        <div>
            <Header />
            {children}
        </div>
    )
}