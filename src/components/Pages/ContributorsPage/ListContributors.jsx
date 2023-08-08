import { useState, useEffect } from "react"
import useGet from "../../../hook/useGet"
import reset from '../../../assets/reset.svg'
import { colors } from "../../utilsGeneral"

export default function ListContributors(){

    const [ contributorsList, setContributorsList ] = useState([])
    const { data, loading, error, getData } = useGet()

    useEffect(()=>{
        getData('https://jsonplaceholder.typicode.com/users')
            .then((res)=>{setContributorsList(res)})
    }, [])

    const searchHandler = (e) => {
        const valueSearched = e.target.value.toLowerCase()

        const search = contributorsList.filter((contributors)=>{
            if(contributors.name.toLowerCase().includes(valueSearched)||contributors.email.toLowerCase().includes(valueSearched)){
                return contributors
            }
        })

        if(e.key === 'Backspace'){
            const backspaceData= data.filter((contributors)=>{
                if(contributors.name.toLowerCase().includes(valueSearched)||contributors.email.toLowerCase().includes(valueSearched)){
                    return contributors
                }
            })

            setContributorsList(!backspaceData.length?data:backspaceData )

            return
        }

        setContributorsList(search)
    }
    

    return(
        <div className="w-full h-72 flex flex-col gap-3 items-center justify-center overflow-hidden p-2" style={{color:colors.darkGrayishBlue}}>
            <div className="w-full pl-2 flex justify-around">
                <input type="text" placeholder="Search partner" className="p-1 focus:outline-none w-5/6" onChange={searchHandler} onKeyDown={searchHandler} />
                <button className="p-1" >
                    <img src={reset} alt="Reset button" width={30} onClick={()=>{setContributorsList(data)}} />
                </button>
            </div>
           <SearchAndList error={error} loading={loading} contributorsList={contributorsList} />
        </div>
    )
}

const SearchAndList = ({error, loading, contributorsList}) =>{
    return(
        <>
         {
            error?
            (
                <div className="w-full h-96 flex items-center justify-center flex-col">
                     <h2 className="font-bold text-3xl">Oops...</h2>
                     <span>An error unexpected... Try again later</span>
                </div>
            )
            :
                loading?
                    <img src="https://cdn.pixabay.com/animation/2022/07/29/03/42/03-42-22-68_512.gif" width={100} alt="" />
                :
                    <ul className="w-full h-full overflow-y-scroll flex flex-col gap-3 p-2">   
                        {
                        contributorsList.map((contributor)=>(
                            <li key={contributor.id} className="w-full h-fit bg-white rounded p-2 flex gap-2 items-center " >
                                <img src="https://pbs.twimg.com/media/Ef2tnmyXkAE2V7B.jpg"  className="rounded-full w-10 h-10" alt="" />
                                <div>
                                    <h4>{contributor.name}</h4>
                                    <span>{contributor.email}</span>
                                </div>
                            </li>
                        ))
                    }
                    </ul>
            }
        </>
    )
}