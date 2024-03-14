import apiProductos from "@/model/productos/apiProductos";
import { AdminTable } from "../components/AdminTable"



const ProductosAdminPage = async () => {

    const productos = await apiProductos.listar();

    return (
        <>
            <AdminTable productos={productos}/>
        </>
    )
}

export default ProductosAdminPage