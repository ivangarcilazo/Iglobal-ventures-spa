import { colors } from "../../../utilsGeneral";
import { Link } from "react-router-dom";

const navigations = [
    {
        label:'PRODUCT',
        path:'/product',
        color:colors.veryDarkBlue
    },{
        label:'FEATURES',
        path:'/features',
        color:colors.veryDarkBlue
    },{
        label:'PRICING',
        path:'/pricing',
        color:colors.veryDarkBlue
    },{
        label:'LOGIN',
        path:'/login',
        color:colors.grayishBlue
    },
]

export const LinkNavigations = () =>{
    return(
        <>
        {
            navigations.map((element, index)=>(
                <>
                {element.label === 'LOGIN'?
                    <>
                        <div key={`${index}LOGIN`} className="md:w-2 md:h-2 md:rounded-full w-full border" style={{backgroundColor:element.color}}></div>
                        <Link className="font-barlowCondensed font-bold text-lg hover:underline" key={index} to={element.path} style={{color:element.color}} >{element.label}</Link>
                    </>
                :
                    <Link className="font-barlowCondensed font-bold text-lg hover:underline" key={index} to={element.path} style={{color:element.color}} >{element.label}</Link>
                }
                </>
            ))
        }    
        </>
    )
    
}