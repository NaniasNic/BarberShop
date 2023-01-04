import { Button } from "../Button/Index";

import { Container } from "./Styles";

import Logo from "../../assets/Logo.png";

export function NavBar() {
    return (
        <Container>
            <div>
                <img src={Logo} alt="Logo" />
            </div>

            <div className="menu">
                <ul>
                    <li>Home</li>
                    <li>Service</li>
                    <li>About Us</li>
                    <li>Pages</li>
                    <li>News</li>
                    <li>More</li>
                </ul>
            </div>
            
            <div className="shop">
                <Button 
                    title="🛒$0,00"
                />

                <Button
                    title="Appointment"
                />
            </div>
        </Container>
    )
}