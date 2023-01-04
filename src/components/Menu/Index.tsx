import { Container } from "./Styles";

import { IoClose } from "react-icons/io5";
import { Button } from "../Button/Index";

export function Menu({ menuIsVisible, setMenuIsVisible }) {
    return (
        <Container isVisible={menuIsVisible}>
            <IoClose size={45} onClick={() => setMenuIsVisible(false)} />

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