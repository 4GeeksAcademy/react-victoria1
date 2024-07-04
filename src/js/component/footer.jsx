import React from "react"; // 1) Importar react

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

// 2) Crear el componente
//create your first component
const Footer = () => {
    return (
    <div className="container-fluid mt-5">
        <footer className="d-flex justify-content-center py-3 bg-dark footer-dark">
            <div className="col-md-4 d-flex align-items-center">
                <span className="text-muted">Your Website © 2021 Company, Inc</span>
             </div>
        </footer>
    </div>
    );
}

// 3) Exportar el componente
export default Footer;


