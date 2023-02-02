import { useEffect, useState } from "react"
import { Form } from "react-bootstrap"
import Modal from "../../components/Modal"
import Table from "../../components/Table"
import { Store } from "../../models/stores.model"
import { deleteStoreService, updateStoreService, getStoresService } from "../../services/stores.service"

const LocationsAdmin = () => {
    const [Stores, setStores] = useState([] as Store[])
    const [ModifyModal, setModifyModal] = useState({
        status: false, data: {
            _id: "",
            nombre: "",
            descripcion: "",
            horario: "",
            direccion: "",
            telefono: "",
            email: "",
            latitud: "",
            longitud: "",
            imagen: "",
            estado: "",
            createdAt: "",
            updatedAt: "",

        }
    })

    useEffect(() => {
        getStores().then((stores) => {
            setStores(stores)
        })
    }, [])

    const resetModifyModal = () => {
        setModifyModal({
            status: false, data: {
                _id: "",
                nombre: "",
                descripcion: "",
                horario: "",
                direccion: "",
                telefono: "",
                email: "",
                latitud: "",
                longitud: "",
                imagen: "",
                estado: "",
                createdAt: "",
                updatedAt: "",
            }
        })
    }
    const getStores = async (): Promise<Store[]> => await getStoresService()
    const handleClick = ({ accion, id }: { accion: string, id: string }) => {
        if (accion === "editar") {
            const store = Stores.find((store) => store._id === id)

            if (store) {
                setModifyModal({ status: true, data: store })
                console.log("editar", id)
            }

        }

        if (accion === "eliminar") {
            deleteStoreService(id).then(() => {
                getStores().then((stores) => {
                    setStores(stores)
                })
            })
        }
    }
    const handleChange = (name: string, value: string) => setModifyModal({ status: true, data: { ...ModifyModal.data, [name]: value } })
    const handleCloseModifyModal = () => setModifyModal({ status: false, data: ModifyModal.data })
    const handleSaveModifyModal = () => {
        updateStoreService(ModifyModal.data._id, ModifyModal.data)
            .then(() => {
                getStores().then((stores) => {
                    setStores(stores)
                    resetModifyModal()
                })
            })
    }

    return (
        <div>
            <Modal show={ModifyModal.status} title={"Editar tienda"} handleClose={handleCloseModifyModal} handleSave={handleSaveModifyModal}>
                <ModalBody store={ModifyModal.data} onChange={handleChange} />
            </Modal>
            <h1>Locations</h1>
            <div style={{
                display: "flex",
            }}>
                <Table
                    data={Stores}
                    headers={[
                        "_id", "nombre", "descripcion", "horario"
                    ]}
                    handleClick={handleClick}
                />
            </div>

        </div>

    )
}

const ModalBody = ({ store, onChange }: { store: Store, onChange: (nombre: string, value: string) => void }) => {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                    type="text"
                    autoFocus
                    onChange={(e) => onChange("nombre", e.target.value)}
                    value={store.nombre}
                />
                <Form.Label>Descripcion</Form.Label>
                <Form.Control
                    type="text"
                    onChange={(e) => onChange("descripcion", e.target.value)}
                    value={store.descripcion}
                />
                <Form.Label>Latitud</Form.Label>
                <Form.Control
                    type="text"
                    onChange={(e) => onChange("latitud", e.target.value)}
                    value={store.latitud}
                />
                <Form.Label>Longitud</Form.Label>
                <Form.Control
                    type="text"
                    onChange={(e) => onChange("longitud", e.target.value)}
                    value={store.longitud}
                />
                <Form.Label>Telefono</Form.Label>
                <Form.Control
                    type="text"
                    onChange={(e) => onChange("telefono", e.target.value)}
                    value={store.telefono}
                />
                <Form.Label>Horario</Form.Label>
                <Form.Control
                    type="text"
                    onChange={(e) => onChange("horario", e.target.value)}
                    value={store.horario}
                />
                <Form.Label>Direccion</Form.Label>
                <Form.Control
                    type="text"
                    onChange={(e) => onChange("direccion", e.target.value)}
                    value={store.direccion}
                />
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    onChange={(e) => onChange("email", e.target.value)}
                    value={store.email}
                />
            </Form.Group>
        </Form>
    )
}

export default LocationsAdmin