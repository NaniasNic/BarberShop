import { Button } from "../Button/Index";
import { Container } from "./Styles";

import Img from "../../assets/2.jpg";

export function More() {
    return (
        <Container>
            <div className="photo">
                <img src={Img} alt="" />
            </div>
            
            <div className="info">
                <h1>
                    Service <span>Beyond Expectation</span>
                </h1>

                <hr />

                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Saepe cupiditate inventore voluptate impedit sunt repellat maiores animi, 
                    itaque suscipit laboriosam eos, sequi sit earum placeat explicabo?
                </p>

                <div className="infoFoot">
                    <Button 
                        
                        title="Read more about us"
                    />
                </div>
            </div>
        </Container>
    )
}