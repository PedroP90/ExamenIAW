import { IProducto } from '@/interfaces/IProductos';
import React, { FC } from 'react'

import Link from 'next/link';
import { PPGProductoCard } from './ProductosCard';

interface Props {
    productos: IProducto[];
}

export const PPGProductosCardList:FC<Props> = ({productos}) => {
  return (
    <section className="flex flex-row flex-wrap">
        {
            productos.map( (producto) => (
                <article key={producto.codigo} className="basis-1/4 p-2">
                     <Link key={producto.codigo} href={`/public/productos/${producto.codigo}`}>
                        <PPGProductoCard key={producto.codigo} producto = { producto }/>
                     </Link>
                </article>
            ))
        }
    </section>
  )
}