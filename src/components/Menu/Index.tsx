import { Container } from "./Styles";

import { IoClose } from "react-icons/io5";
import { Button } from "../Button/Index";
import { useEffect } from "react";

export function Menu({ menuIsVisible, setMenuIsVisible }) {
    useEffect(() => {
        document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
    }, [menuIsVisible])

    return (
        <Container isVisible={menuIsVisible}>
            <IoClose size={45} onClick={() => setMenuIsVisible(false)} />

            <div className="menuMob">
                <ul>
                    <li>Home</li>
                    <li>Service</li>
                    <li>About Us</li>
                    <li>Pages</li>
                    <li>News</li>
                    <li>More</li>
                </ul>
            </div>
            
            <div className="shopMob">
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