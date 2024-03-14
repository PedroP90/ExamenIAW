'use client'
import { IProducto } from "@/interfaces/IProductos";
import { FC } from "react";
import ProductModal from "./ProductModal";
import axios from "axios";


interface Props {
    productos: IProducto[];
}

export const AdminTable:FC<Props> = ({productos}) => {

   
    return (
        <>
        
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Producto
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Proveedor
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Gama
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Precio
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        <ProductModal/>
                                    </th>
                                    
                                </tr>
                            </thead>
                            {
                                productos.map( (producto) => (    
                                    <tbody key={producto.codigo}>
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                                {producto.nombre}
                                            </td>
                                            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                                {producto.proveedor}
                                            </td>
                                            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                                {producto.gama?.nombre}
                                            </td>
                                            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                                {producto.pvp}€
                                            </td>
                                            <td className="px-6 py-4">
                                                <button type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                                                    Borrar
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                    
                                ))
                            }    
                        </table>
                    </div>

        </>
    
    )
}