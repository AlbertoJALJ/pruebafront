import { Store } from "../models/stores.model";

export const formatStores = (stores: Store[]) => {
    return stores.map((store) => {
        const { _id, nombre, descripcion, horario } = store;
        return {
            _id, nombre, descripcion, horario
        };
    });
}