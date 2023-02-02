import { Store } from "../models/stores.model"
import { stores } from "./index"

export const getStoresService = async () => {
    const response = await stores.get("/stores")
    return response.data
}

export const deleteStoreService = async (id: string) => {
    const response = await stores.delete(`/store/${id}`)
    return response.data
}

export const detallesStoreService = async (id: string) => {
    const response = await stores.get(`/store/${id}`)
    return response.data
}

export const updateStoreService = async (id: string, store: {
    nombre?: string;
    descripcion?: string;
    latitud?: string;
    longitud?: string;
    direccion?: string;
    telefono?: string;
    horario?: string;
    email?: string;
    whatsapp?: string;
    sitio_web?: string;
}) => {

    const response = await stores.patch(`/store/${id}`, store)
    return response.data
}

export const createStoreService = async (store: Store) => {
    const response = await stores.post("/store", store)
    return response.data
}