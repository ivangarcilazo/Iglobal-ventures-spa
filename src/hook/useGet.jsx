import { useEffect, useState } from "react"

export default function useGet(){
    const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState(false)
    const [ data, setData ] = useState([])

    const getData = async(url) => {

        if(!url) return

        try {
            setLoading(true)
            const response = await fetch(`${url}`)

            const responseJSON = await response.json()

            setLoading(false)
            setError(false)

            if(!response.ok){
                throw new Error 
            }

            setData(responseJSON)
            return responseJSON

        } catch (error) {
            setError(Error)
        }
    }

    useEffect(()=>{
        getData()
    }, [])

    return { data, loading, error, getData}
    
}