import { useEffect, useState } from "react"

export default function useGet(url){
    const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState(true)
    const [ data, setData ] = useState([])

    const fetchData = async() => {
        try {
            setLoading(true)
            const response = await fetch(`${url}`)

            if(!response.ok){
                throw new Error 
            }

            const responseJSON = await response.json()

            setData(responseJSON)
            setLoading(false)
            setError(false)
        } catch (error) {
            setError(Error)
        }
    }

    useEffect(()=>{
        fetchData()
    }, [])

    return { data, loading, error, fetchData}
    
}