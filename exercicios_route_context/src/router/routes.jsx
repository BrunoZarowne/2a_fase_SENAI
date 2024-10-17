import { createBrowserRouter } from "react-router-dom"; 
import Home from "../pages/Home";
import Contato from "../pages/Contato";
import Generica from "../pages/Generica";
import Atv_7_12 from "../pages/Atv_7_12";
import Atv_7_13_ from "../pages/Atv_7_13_";

const router = createBrowserRouter([
    {path: "/", element: <Home />},
    {path: "/contato", element: <Contato />},
    {path: "/generica", element: <Generica />},
    {path: "/Atv712", element: <Atv_7_12 /> },
        // ^caminho pra         // ^aqui vai o nome da pagina
        // ir pra pagina
    {path: "/Atv713", element: <Atv_7_13_ /> },
])

export default router;
