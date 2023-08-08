import React from "react";
import ContextAuth from '../../Provider/ContextAuth'
import { useContext } from "react";
import { colors } from "../../../utilsGeneral";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../Button/Button";

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
        label:'AGENDA',
        path:'/agenda',
        color:colors.veryDarkBlue
    },{
        label:'LOGIN',
        path:'/login',
        color:colors.grayishBlue
    },
]

export const LinkNavigations = () =>{
    const { state, dispatch } = useContext(ContextAuth)
    const userLogged = state.length === 0
    
    const navigate = useNavigate()
    const handlerLogout = () =>{
        dispatch({
            type:'DELETE_DATA'
        })
        navigate('/login')
    }

    return(
        <>
        {
            navigations.map((element, index)=>(
                <React.Fragment key={index}>
                {element.label === 'LOGIN'?
                    <>
                        <div key={`${index}LOGIN`} className="md:w-2 md:h-2 md:rounded-full w-full border" style={{backgroundColor:element.color}}></div>
                        {
                            !userLogged?(
                                <>
                                    <Button label={`LOGOUT`} actionHandler={handlerLogout} background={colors.darkGrayishBlue}>
                                    </Button>
                                </>

                            ):(

                                <Link className="font-barlowCondensed font-bold text-lg hover:underline" key={index} to={element.path} style={{color:element.color}} >{element.label}</Link>

                            )
                        }
                       
                    </>
                :
                    <Link className="font-barlowCondensed font-bold text-lg hover:underline" key={index} to={element.path} style={{color:element.color}} >{element.label}</Link>
                }
                </React.Fragment>
            ))
        }    
        </>
    )
    
}
