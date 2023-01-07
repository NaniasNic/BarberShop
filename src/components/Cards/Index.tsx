import { Card, Container } from "./Syles";

import Nav from "../../assets/icon/navalha.png"

export function Cards() {
    return (
        <Container>
            {
                [
                    {itemId: "FirstID", img: "https://th.bing.com/th/id/R.e831c3e74b4bb3dd2682c06e4e602643?rik=cj6HmybNUayvJQ&pid=ImgRaw&r=0",name: "Haircut", description: "testeeeeeeeeee"},
                    {itemId: "SecondID", img: "https://svgsilh.com/png-1024/159765.png",name: "Shaving", description: "testeeeeeeeeee"},
                    {itemId: "ThreeID", img: "https://images.vexels.com/media/users/3/158141/isolated/preview/9290e7b727b466304bdd670caac4384d-round-hair-brush-icon-hair-icon-by-vexels.png",name: "Styling", description: "testeeeeeeeeee"},
                    {itemId: "FourID", img: "https://th.bing.com/th/id/R.4c3f4f9599c733c411e9d7ebedda9308?rik=8eZGGHzHadAeiw&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_471351.png&ehk=FcQGuESnpDzOhEImexvXD4uTgTXFNadOkOK%2fNxkzDZU%3d&risl=&pid=ImgRaw&r=0",name: "Trimming", description: "testeeeeeeeeee"}
                ].map(itemId => (
                    <Card
                        key={itemId}
                    >
                        <img src={itemId.img} alt={itemId.name} />

                        <h1>{itemId.name}</h1>
                        
                        <p>{itemId.description}</p>

                        <h3>Read More</h3>
                    </Card>
                ))
            }
        </Container>
    )
}