import useGet from "../../../hook/useGet"
import Button from "../Button/Button"

import { colors } from "../../utilsGeneral"
import { useEffect } from "react"

export default function FormScheduleContainer({inputs, onSubmit, error, handlerInputChange, loadingPost}){
    const { data, loading:loadingGet, getData } = useGet()
    useEffect(()=>{
      getData('https://jsonplaceholder.typicode.com/users')
    },[])

    const handleSubmit = (e) => {
      e.preventDefault();

      const filteredInput = Array.from(e.target).filter((input)=>input.nodeName!=='BUTTON')

      let formData

      for( const input of filteredInput){
        formData = {...formData, [input.name]:input.value}
      }

      onSubmit(formData);
    };

    return (
      <div className="w-full mt-2" style={{color:colors.darkGrayishBlue}}>
        <form action="" className="flex flex-col gap-3" onSubmit={handleSubmit}>
            
          {inputs.map((input, index) => (
            <div key={input.label} className="flex items-center justify-start gap-2 w-full">
              <label>{input.label}</label>
              <input
                name={input.name}
                className="w-full p-1 rounded border"
                placeholder={input.placeholder}
                type={input.type}
                disabled={input?.disabled}
                value={input?.value}
                onChange={(e)=>handlerInputChange&&handlerInputChange(e, index)}
              />
            </div>
          ))}

          <div className="w-full flex gap-2">
                    <label>Select a partner:</label>
                    <select name='partner'>
                        {loadingGet?(
                            <option value="">Loading...</option>
                        ):(
                            <>
                            {
                                data.map((partners)=>(
                                    <option value={partners.name} key={partners.name}>{partners.name}</option>
                                ))
                            }
                            </>
                        )}
                    </select>
                </div>

          <div className="w-full text-white flex justify-between items-center gap-3">
            <Button label={"Submit"} background={colors.darkGrayishBlue} />
            {loadingPost&&<img className="" src="https://cdn.pixabay.com/animation/2022/07/29/03/42/03-42-22-68_512.gif" width={30} alt="loadingImage" />}
            <span className="rounded pl-2 pr-2" style={{backgroundColor:colors.red, color:colors.lightGrayishBlue}}>{error&&(error?.message)}</span>
          </div>

        </form>
      </div>
    )
}