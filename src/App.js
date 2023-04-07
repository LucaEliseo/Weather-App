import "bootstrap/dist/css/bootstrap.min.css";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "./App.css";
import { BrowserRouter, Routes} from "react-router-dom";
import NavBar from "./Component/NavBar";
import Main from "./Component/Main";
import Weather from "./Component/Weather";
import Footer from "./Component/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Main />
      <Weather />
   <Footer/>
      
      <Routes></Routes>
    </BrowserRouter>
  
  );
}

export default App;
