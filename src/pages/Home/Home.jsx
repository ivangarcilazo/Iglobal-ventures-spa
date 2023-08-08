import PresentationSection from "./components/PresentationSection"
import ContributorsListSection from "./components/ContributorsListSection"

export default function Home(){
    return(
        <main className="pt-5 md:pt-0">
            <PresentationSection />
            <ContributorsListSection />
        </main>
    )
}