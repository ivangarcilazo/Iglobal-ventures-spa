import logo from '../../../assets/logo.svg'
import { useState } from 'react'

import iconHamburger from '../../../assets/icon-hamburger.svg'
import iconClose from '../../../assets/icon-close.svg'
import MenuDropDown from './components/MenuDropDown'
import MenuCommon from './components/MenuCommon'

export default function Header(){
    const [ openMenu, setOpenMenu ] = useState(false)

    return(
        <>
            <header className="h-24 w-full absolute flex items-center justify-between pl-7 pr-7 md:h-32 md:justify-between">
                <div className='md:ml-20'>
                    <img src={logo} width={30} loading='lazy' alt='logo' />
                </div>
                <MenuCommon />

                <button onClick={()=>setOpenMenu(!openMenu)} className='flex md:hidden'>
                    {
                        openMenu?<img width={25} src={iconClose} alt="" />:<img width={25} src={iconHamburger} alt="" />
                    }
                </button>
            </header>
            {openMenu&&<MenuDropDown />}
        </>
    )
}