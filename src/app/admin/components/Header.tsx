'use client'

import { PPGMenu } from "@/components/commons/Menu"
import Logo from "@/components/commons/logo"
import { ILink } from "@/interfaces/iLinks";


export const Header = () => {

    const links:ILink[] = [
        {name: 'Productos', href: '/public/productos'}
      ];


  return (
    <>
      
        <PPGMenu links= {links}/>



    </>
  )
}