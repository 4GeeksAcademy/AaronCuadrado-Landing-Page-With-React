import React from "react";

const jumbotronStyle = {
    backgroundColor: '#F8F9FA', 
    color: '#333333', 
    padding: '80px 0', 
    marginBottom: '30px', 
    borderRadius: '10px', 
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const jumbotronTitleStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#CD212A', 
};

const jumbotronTextStyle = {
    fontSize: '1.25rem',
    marginBottom: '20px',
};

const jumbotronButtonStyle = {
    backgroundColor: '#008C8C', 
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
    backgroundColor: '#005C5C', 
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
