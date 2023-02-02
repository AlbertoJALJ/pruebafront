import { Button as ButtonComponent } from "react-bootstrap"
const Button = ({
    text,
    onClick,
    submit = false,
}: { text: string, onClick: () => void, submit?: boolean }) => {
    return (
        <ButtonComponent onClick={onClick} variant="primary" type={(submit) ? "submit" : "button"}>{text}</ButtonComponent>
    )
}

export default Button