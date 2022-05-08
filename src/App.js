
import './App.css';
import Navegador from "./componentes/navegador";
import Header from "./componentes/header";
import Main from "./componentes/main";

function App() {
  const style={
    body: {
      background: "linear-gradient(137deg, rgba(255,255,255,1) 66%, rgba(244,213,222,1) 76%, rgba(220,125,154,1) 85%, rgba(108,0,0,1) 98%)",
    }
  }
  return (
    <div style={style.body}>
      <Navegador />
      <Header />
      <Main />
    </div>
  );
}

export default App;
