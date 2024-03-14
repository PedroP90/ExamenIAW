import { IProducto } from '@/interfaces/IProductos';
import { Card, CardBody, CardFooter, CardHeader, Image } from '@nextui-org/react';
import { FC } from 'react';


interface Props {
  producto: IProducto;
}

export const PPGProductoDetail:FC<Props> = ({ producto }) => {


    const ruta = `http://192.168.8.88:3001/img/productos/${producto.imagen}`;
    // console.log(ruta)
    
    return(
        <Card className="py-4 flex flex-row flex-wrap hover:bg-red-900 hover:text-white">
            <CardHeader className="justify-center pb-0 pt-2 px-4 mx-auto basis-1/3">
                <Image 
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={ruta}
                    width={270} 
                    />
            </CardHeader>
            <CardBody className="overflow-visible py-2 basis-1/3 space-y-2">
                <p><strong>Nombre:</strong> {producto.nombre}</p>
                <p><strong>Código:</strong> {producto.codigo}</p>
                <p><strong>Proveedor:</strong> {producto.proveedor}</p>
                <p><strong>Stock:</strong> {producto.stock}</p>
                <p><strong>PVP:</strong> {producto.pvp}</p>
                <p><strong>Gama:</strong> {producto.gama?.nombre}</p>
            </CardBody>
            <CardFooter>
                <h3>{producto.descripcion}</h3>
            </CardFooter>
        </Card>

    )
}