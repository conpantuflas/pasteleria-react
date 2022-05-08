import React from "react";

const Navegador = () => {
    const style={
      fondo:{
        backgroundColor:"#6F0022",
        color: "#ffffff"
      },
      search:{
        backgroundColor:"#AA0034",
        color: "#ffffff",
      },
      titular:{
        color:"#ffffff",
        fontSize:"1.5rem"
      },
      fuentecolor:{
        color:"#ffffff"
      }
    }
    return(
        <nav className="navbar navbar-expand-lg navbar-light" style={style.fondo}>
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a style={style.titular} className="navbar-brand" href="#" >Tus Pastelitos</a>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" style={style.fuentecolor}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={style.fuentecolor}>Productos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" style={style.fuentecolor}>Despachos</a>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="buscar..." aria-label="Search"/>
              <button className="btn" type="submit" style={style.search}>Buscar</button>
            </form>
          </div>
        </div>
      </nav> 
    )
}

export default Navegador;