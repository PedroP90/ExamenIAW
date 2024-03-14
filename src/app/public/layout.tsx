
import { PPGMenu } from "@/components/commons/Menu";
import { IChildren } from "@/interfaces/iChildren";
import { ILink } from "@/interfaces/iLinks";





export default function PublicLayout({children}: IChildren){

    //peticion la BD <-- LINKS DEL FRONTEND
    const links:ILink[] = [
        {name: 'Productos', href: '/public/productos'},
        {name: 'Gamas', href: '/public/gamas'},
        {name: 'Usuarios', href: '/public/usuarios'}
      ];


    return (
        <>
            <header>
                {/* <h1>Header del Frontend</h1> */}
                <PPGMenu links= {links} />
            </header>
            <main>
                { children }
            </main>
        </>
    )
}