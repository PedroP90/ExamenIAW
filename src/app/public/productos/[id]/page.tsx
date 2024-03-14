import { PPGProductoDetail } from '@/components/public/productos/ProductoDetail';
import apiProductos from '@/model/productos/apiProductos'
import React from 'react'


const PPGDetallePage = async ({ params: { id } }: { params: { id: string } }) => {

  const producto = await apiProductos.detalle(id);

  return (
    <section className="container mx-auto px-4 mt-6 flex justify-center">
        <PPGProductoDetail key={producto.codigo} producto={producto} />
    </section>
  )
}

export default PPGDetallePage