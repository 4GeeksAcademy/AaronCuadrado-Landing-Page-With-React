import React from "react";

const jumbotronStyle = {
    backgroundColor: '#F8F9FA', // Fondo gris claro para contraste
    color: '#333333', // Color de texto oscuro para buen contraste
    padding: '80px 0', // Espaciado generoso para el contenido
    marginBottom: '30px', // Margen para separar del contenido siguiente
    borderRadius: '10px', // Bordes redondeados para un diseño más moderno
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Sombra sutil para destacar
};

const jumbotronTitleStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#CD212A', // Rojo italiano para el título
};

const jumbotronTextStyle = {
    fontSize: '1.25rem',
    marginBottom: '20px',
};

const jumbotronButtonStyle = {
    backgroundColor: '#008C8C', // Verde italiano para el botón
    borderColor: '#008C8C',
    padding: '10px 20px',
    fontSize: '1rem',
    fontWeight: '600',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
    color: '#FFFFFF',
    textDecoration: 'none',
};

const jumbotronButtonHoverStyle = {
    backgroundColor: '#005C5C', // Verde más oscuro para el hover
    borderColor: '#005C5C',
};

const Jumbotron = () => {
    return (
        <div className="jumbotron jumbotron-fluid" style={jumbotronStyle}>
            <div className="container">
                <h1 className="display-4" style={jumbotronTitleStyle}>¡Bienvenido a Alfa Romeo!</h1>
                <p className="lead" style={jumbotronTextStyle}>
                    Descubre la pasión y el rendimiento de Alfa Romeo. Explora nuestros modelos más recientes y experimenta la artesanía y la innovación italiana que definen nuestra marca.
                </p>
                <a
                    className="btn btn-lg"
                    href="#"
                    role="button"
                    style={jumbotronButtonStyle}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = jumbotronButtonHoverStyle.backgroundColor}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = jumbotronButtonStyle.backgroundColor}
                >
                    Explora Ahora
                </a>
            </div>
        </div>
    );
}

export default Jumbotron;
