import logo from '../../../assets/logo.svg'
import { useState } from 'react'
import iconHamburger from '../../../assets/icon-hamburger.svg'
import iconClose from '../../../assets/icon-close.svg'
import MenuDropDown from './components/MenuDropDown'
import MenuCommon from './components/MenuCommon'
import { Link } from 'react-router-dom'

export default function Header(){
    const [ openMenu, setOpenMenu ] = useState(false)

    return(
        <>
            <header className="h-24 w-full absolute flex items-center justify-between pl-7 pr-7 md:h-32 md:justify-between z-10">
                <Link className='md:ml-32 ml-12' to={'/'}>
                    <img src={logo} width={30} loading='lazy' alt='logo' />
                </Link>
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