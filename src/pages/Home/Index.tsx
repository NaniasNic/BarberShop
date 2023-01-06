import { About } from "../../components/About/Index";
import { More } from "../../components/More/Index";
import { NavBar } from "../../components/NavBar/Index";

export function Home() {
    return (
        <div>
            <NavBar />
            <About />
            <More />
        </div>
    )
}