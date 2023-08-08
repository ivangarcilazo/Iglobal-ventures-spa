import { useEffect, useState } from "react"

export default function usePostDeletePut(){
    const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState(false)

    const manipulateData = async(url, body, method) => {

        if(!url||!body || !method) return
        
        try {
            setLoading(true)
            
            const response = await fetch(`https://iglobal-adventures-spa-backend.netlify.app/.netlify/functions/app/${url}`, {
                method: method,
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(body)
            })

            const responseJSON = await response.json()

            setLoading(false);
            setError(false);
            
            if(!response.ok){
                if(responseJSON?.message){
                    setError({
                        message:responseJSON.message
                    })
                    return
                }
                throw new Error 
            }
        
            return responseJSON

        } catch (error) {
            setLoading(false)
            setError({ message: "An error occurred" });
        }
    }

    useEffect(()=>{
        manipulateData()
    }, [])

    return { loading, error, manipulateData, setError}
    
}