import PresentationSection from "./components/PresentationSection"
import ContributorsListSection from "./components/ContributorsListSection"

export default function Home(){
    return(
        <section className="pt-5 md:pt-0">
            <PresentationSection />
            <ContributorsListSection />
        </section>
    )
}