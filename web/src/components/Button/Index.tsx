import { ButtonHTMLAttributes } from "react"
import { Container } from "./Styles"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string
}

export function Button({title}: ButtonProps) {
    return (
        <Container>
            {title}
        </Container>
    )
}