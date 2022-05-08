import React from "react";
import Videos from "../videos/pexels-skyler-ewing-10508282.mp4";

const Header = () => {
    const style={
        padre:{
            position:"relative",
            display: "flex",
            justifyContent:"center",
            marginTop: "1rem"
        },
        fondo:{
            top:"3rem",
            left:"4rem",
            width:"88%",
            height: "15rem",
            objectFit: "cover",
            zIndex:"1",
            borderRadius: "30px"
        },
        h1:{
            position:"absolute",
            top:"1rem",
            right:"12rem",
            zIndex:"2",
            color:"#ffffff",
            fontWeight:"800"
        },
        p:{
            position:"absolute",
            top:"6rem",
            right:"8rem",
            zIndex:"3",
            color:"#ffffff",
            fontWeight:"800",
            width:"25rem"
        },
        boton:{
            position:"absolute",
            top:"11rem",
            right:"18rem",
            zIndex:"4",
            color:"#ffffff",
            //border: "solid 4px #AA0034",
            borderRadius:"50px",
            background: "linear-gradient(180deg, rgba(185,100,112,1) 8%, rgba(197,128,138,1) 53%, rgba(255,222,231,0.969625350140056) 100%)"
        }
    }
    return(
        <div className="jumbotron" style={style.padre}>
            <video style={style.fondo} autoPlay="autoPlay" muted loop>
                <source src={Videos} type="video/mp4"/>
            </video>
            <h1 className="display-4" style={style.h1}>Tus Pastelitos</h1>
            <p style={style.p} className="lead">Deliciosos pastelitos hechos con productos de selecccion gurmet</p>
            <p style={style.boton}><a className="btn btn-lg" href="#" role="button">Leer mas</a></p>
        </div>
    )
}

export default Header