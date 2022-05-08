import React from "react";

const Cartas = (props) => {
    const style ={
        anchoCarta:{
            width: "15rem",
            margin:"1rem auto",
            borderRadius:"50px",
        },
        imagen:{
            height:"5rem",
            width:"100%",
            objectFit:"cover"
        },
        titulo:{
            textAlign:"center",
            color:"#ffffff",
            fontWeight:"800",
            fontSize: "2rem"
        },
        texto:{
            textAlign:"center",
            color:"#ffffff",
        },
         boton:{
            margin:"0 3rem",
            color:"#ffffff",
            fontWeight:"800",
            border:"0",
            borderRadius:"50px",
            border:"solid 2px #AA0034"
         },
         bodytext:{
            height:"13rem",
            background: "linear-gradient(180deg, rgba(197,128,138,0.5298494397759104) 90%, rgba(255,222,231,0.7847514005602241) 100%)"
         }
    }
    return(
      <div style={style.anchoCarta} >
            <div className="card" >
            <img style={style.imagen} className="card-img-top" src={props.imagen} alt="Cardimagecap"/>
            <div style={style.bodytext} className="card-body">
                <h5 style={style.titulo} className="card-title">{props.nombre}</h5>
                <p style={style.texto} className="card-text">{props.descripcion}</p>
                <a style={style.boton} href="#" className="btn">Leer mas</a>
            </div>
        </div>
      </div>
    )
}

export default Cartas;