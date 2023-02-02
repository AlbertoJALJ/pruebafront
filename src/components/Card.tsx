type CardType = {
    titulo: string,
    descripcion: string,
    direccion: string,
    horario: string,
}
const Card = ({
    titulo,
    descripcion,
    direccion,
    horario
}: CardType) => {
    return (
        <div>Card</div>
    )
}

export default Card