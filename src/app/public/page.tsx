import Logo from "@/components/commons/logo";
import { PPGProductosCardList } from "@/components/public/productos/ProductosCardList";
import apiProductos from "@/model/productos/apiProductos";
import { Button } from "@nextui-org/button";


const PPGPublicPage = async () => {
  
   const productos = await apiProductos.listar();
  
  return (
        <section className='flex flex-col items-center'>
          <h2 className='text-4xl m-8'>Sección de Productos</h2>
          <PPGProductosCardList productos={productos}/>
        </section>
  )
}

export default PPGPublicPage;