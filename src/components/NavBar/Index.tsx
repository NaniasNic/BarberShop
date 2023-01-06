import { useState } from "react";
import { Button } from "../Button/Index";

import { Container } from "./Styles";

import Logo from "../../assets/Logo.png";
import { Menu } from "../Menu/Index";

import { BiMenu } from "react-icons/bi";

export function NavBar() {
    const [ menuIsVisible, setMenuIsVisible ] = useState(false);

    return (
        <Container>
            <div>
                <img src={Logo} alt="Logo" />
            </div>
            
            <Menu 
                menuIsVisible={menuIsVisible}
                setMenuIsVisible={setMenuIsVisible}
            />

            <BiMenu 
                size={45}
                onClick={() => setMenuIsVisible(true)}
            />

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