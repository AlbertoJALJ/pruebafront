import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Form } from "react-bootstrap";
import { Store } from "../models/stores.model";
import { createStoreService, getStoresService } from "../services/stores.service";
import Button from "../components/Button";

const Locations = () => {
    const [Stores, setStores] = useState([] as Store[])
    const [store, setStore] = useState({
        nombre: "",
        descripcion: "",
        latitud: "",
        longitud: "",
        telefono: "",
        horario: "",
        direccion: "",
        email: "",
    } as Store)

    useEffect(() => {
        getStores().then((stores) => {
            setStores(stores)
        })
    }, [])

    const getStores = async (): Promise<Store[]> => await getStoresService()

    const styles = {
        main: {
            display: "flex",
            gap: "10px"
        },
        form: {
            display: "flex",
            flexDirection: "column" as "column",
            gap: "10px",
            width: "50%",
            padding: "0 50px",
        }
    }

    const onChange = (key: string, value: string) => {
        setStore({
            ...store,
            [key]: value,
        })
    }
    const handleSave = async () => {
        createStoreService(store).then(store => {
            getStores().then((stores) => {
                setStores(stores)
            })
        })
            .catch(error => {
                console.log(error);

            })
    }

    return (
        <div style={styles.main}>

            <MapContainer
                zoom={12}
                center={[19.433397, -99.141348]}
                scrollWheelZoom={false}
                style={{
                    width: "600px",
                    height: "600px",
                    marginTop: "25px"
                }}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {
                    Stores.map((store) => (
                        <Marker key={store._id} position={[parseFloat(store.latitud), parseFloat(store.longitud)]}>
                            <Popup>
                                <div style={{
                                    textAlign: "center",
                                    height: "200px",
                                    width: "200px",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                }}>
                                    <span style={{
                                        fontWeight: "bold",
                                        fontSize: "22px",
                                        marginBottom: "10px",
                                    }}>
                                        {store.nombre}
                                    </span>
                                    <span style={{
                                        fontSize: "15px",
                                        marginBottom: "20px",
                                        display: "flex",
                                        flexDirection: "column",
                                    }}>
                                        <span style={{ fontStyle: "italic" }}>{store.descripcion}</span>
                                        <span>Dirección:  {store.direccion}</span>
                                        <span style={{
                                            fontWeight: "bold",
                                        }}>Horarios: {store.horario}</span>
                                    </span>
                                </div>


                            </Popup>
                        </Marker>
                    ))
                }
            </MapContainer>
            <div style={styles.form}>
                <h1>Crear Tienda</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            type="text"
                            autoFocus
                            onChange={(e) => onChange("nombre", e.target.value)}
                            value={store.nombre}
                            required
                        />
                        <Form.Label>Descripcion</Form.Label>
                        <Form.Control
                            type="text"
                            onChange={(e) => onChange("descripcion", e.target.value)}
                            value={store.descripcion}
                            required
                        />
                        <Form.Label>Latitud</Form.Label>
                        <Form.Control
                            type="text"
                            onChange={(e) => onChange("latitud", e.target.value)}
                            value={store.latitud}
                            required
                        />
                        <Form.Label>Longitud</Form.Label>
                        <Form.Control
                            type="text"
                            onChange={(e) => onChange("longitud", e.target.value)}
                            value={store.longitud}
                            required
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
                            required
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
                    <Button text="Crear" onClick={handleSave} submit />
                </Form>
            </div>
        </div >
    )
}

export default Locations