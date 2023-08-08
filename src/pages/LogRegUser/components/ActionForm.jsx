import { colors } from "../../../components/utilsGeneral"
export default function ActionForm({inputs, onSubmit, error, loading, actionButton}){
    return(
        <form action="POST" className="w-full flex items-start justify-around h-fit gap-3 flex-col pl-3 pt-5 mb-3" onSubmit={onSubmit} >

            {
                inputs.map((input)=>(
                    <div key={input.label} className="flex flex-col w-5/6">
                        <label htmlFor="" className="text-2xl">{input.label}</label>
                        <input type={input.type} style={{color:colors.darkGrayishBlue}} placeholder={input.placeholder} className="p-1 w-full rounded outline-none" />
                    </div>
                ))
            }

            <div className="w-full h-fit flex items-center justify-around">
                <input className="bg-white p-1 pl-4 pr-4 text-xl cursor-pointer rounded " style={{color:colors.grayishBlue}} type="submit" value={actionButton} />
                {loading&&<img className="" src="https://cdn.pixabay.com/animation/2022/07/29/03/42/03-42-22-68_512.gif" width={30} alt="loadingImage" />}
                <span className=" pl-1 pr-1 rounded" style={{backgroundColor:colors.red}}>{error?.message}</span>
            </div>

        </form>
    )
}
