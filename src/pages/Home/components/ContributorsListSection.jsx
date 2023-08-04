import ListContributors from "../../../components/Pages/ContributorsPage/ListContributors"
import { colors } from "../../../components/utilsGeneral"

export default function ContributorsListSection(){
  
    return(
        <section className="w-full h-fit pb-10 flex items-center justify-center">
            <article className="h-96 w-5/6 rounded-xl shadow-xl p-3 flex flex-col gap-5" style={{backgroundColor:colors.lightGrayishBlue}}>
                <div>
                    <h4 className="font-barlowCondensed font-bold text-4xl" style={{color:colors.darkGrayishBlue}}>MEET THE PARTNERS</h4>
                    <span className="font-barlow text-xl" style={{color:colors.grayishBlue}}>Who are behind the project.</span>
                </div>

                <ListContributors />

            </article>
        </section>
    )
}