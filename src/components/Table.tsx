import { Table as TableComponent } from "react-bootstrap"
import Button from "./Button";

type TableRow = {
    [key: string]: any;
}
type TableType = {
    data: TableRow[],
    headers: string[],
    handleClick: (accion: { accion: string, id: string }) => void
}

const Table = ({
    data,
    headers,
    handleClick
}: TableType) => {

    return (
        <TableComponent striped bordered hover>
            <thead>
                <tr>
                    {
                        headers.map((header) => (
                            <th key={header}>{header}</th>
                        ))
                    }
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((row: TableRow) => (
                        <tr key={row._id} style={{
                            fontSize: "14px",
                            fontWeight: "bold",
                        }}>
                            {
                                headers.map((header) => (
                                    <td key={header}>{String(row[header] || "").substring(0, 25)}</td>
                                ))
                            }
                            <td style={{
                                display: "flex",
                                gap: "5px"
                            }}>
                                <Button text="Modificar" onClick={() => handleClick({ accion: "editar", id: row._id })} />
                                <Button text="Eliminar" onClick={() => handleClick({ accion: "eliminar", id: row._id })} />
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </TableComponent>
    )
}

export default Table