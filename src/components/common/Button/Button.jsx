export default function Button({label, background}){
    return(
        <button className="p-2 pl-8 pr-8 rounded hover:opacity-100 md:hover:opacity-80 " style={{backgroundColor:background}}>
            <span className="font-barlowCondensed font-bold text-lg">{label}</span>
        </button>
    )
}