import { About } from "../../components/About/Index";
import { Cards } from "../../components/Cards/Index";
import { More } from "../../components/More/Index";
import { NavBar } from "../../components/NavBar/Index";

export function Home() {
    return (
        <div>
            <NavBar />
            <About />
            <More />
            <Cards />
        </div>
    )
}