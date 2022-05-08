import React from "react";
import Cartas from "./cartas";
import ImagenesGalletas from "./imagenes/galletas.jpg";
import ImagenesPasteleria from "./imagenes/piedelimon.jpg";
import ImagenesPanaderia from "./imagenes/pan.jpg";
import ImagenesTortas from "./imagenes/torta.jpg";

const Main = () => {
    const style={
        display:{
            width:"90%",
            margin:"0 auto",
            display:"flex",
            justifyContent:"spacearound",
            flexWrap:"wrap"
        }
    }
    return(
        <div style={style.display}>
            <Cartas 
            imagen={ImagenesGalletas}
            nombre="Galletas"
            descripcion="Te invitamos a conocer nuestra amplia variedad de galletas"
            />
            <Cartas 
            imagen={ImagenesPasteleria}
            nombre="Pasteleria"
            descripcion="prueba nuestro exito de momento, Pie de Maracuya..."
            />
            <Cartas
            imagen={ImagenesPanaderia}
            nombre="Panaderia"
            descripcion="tenemos pan con los tipos de harinas que te imagines"
            />
            <Cartas imagen={ImagenesTortas}
            nombre="Tortas"
            descripcion="conoce nuestras trortas sin azucar"
            />
        </div>
    )
}

export default Main;