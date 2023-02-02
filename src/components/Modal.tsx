import { Modal as ModalComponent } from "react-bootstrap"
import Button from "./Button"

type ModalTypes = {
    show: boolean,
    title: string,
    children: React.ReactNode
    handleClose: () => void
    handleSave: () => void
}
const Modal = ({
    show = false,
    title,
    children,
    handleClose,
    handleSave
}: ModalTypes) => {

    return (
        <ModalComponent show={show} onHide={handleClose}>
            <ModalComponent.Header closeButton>
                <ModalComponent.Title>{title}</ModalComponent.Title>
            </ModalComponent.Header>
            <ModalComponent.Body>{children}</ModalComponent.Body>
            <ModalComponent.Footer>
                <Button onClick={handleSave} text="Guardar cambios" />
            </ModalComponent.Footer>
        </ModalComponent>
    )
}

export default Modal