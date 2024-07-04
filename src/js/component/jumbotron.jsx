import React from "react"; // 1) Importar react

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

// 2) Crear el componente
//create your first component
const Jumbotron = () => {
    return (
<div className="p-5 mb-4 bg-secondary bg-opacity-25">
      <div className="container-fluid">
        <h1 className="d-flex text-start">A Warm Welcome!</h1>
        <p className="d-flex text-start col-md-8 fs-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, nemo consectetur! Corporis voluptas pariatur suscipit ipsa. Totam, porro repudiandae tempora doloribus recusandae dicta necessitatibus cupiditate, eligendi eum possimus sed expedita.</p>
        <button className="d-flex justify-align-start btn btn-primary btn-lg" type="button">Example button</button>
      </div>
    </div>
    );
};

// 3) Exportar el componente
export default Jumbotron;
