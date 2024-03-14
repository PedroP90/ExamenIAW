import { ProductosCardList } from '@/components/public/productos/ProductosCardList'
import { IProducto } from '@/interfaces/IProductos'
import apiProductos from '@/model/productos/apiProductos'
import React from 'react'

const PPGProductosPage = async () => {

  const productos = await apiProductos.listar();
  
return (
      <section className='flex flex-col items-center'>
        <h2 className='text-4xl m-8'>Sección de Productos</h2>
        <ProductosCardList productos={productos}/>
      </section>
)
}



export default PPGProductosPage;

