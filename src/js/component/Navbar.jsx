import React from "react";

const navbarStyle = {
    background: 'linear-gradient(to right, #008C8C, #FFFFFF, #CD212A)', // Gradiente tricolor bandera italiana
    
};

const logoStyle = {
    height: '40px', // Tamaño del logo ajustado
    marginRight: '15px', // Espacio a la derecha del logo
};

const navLinkStyle = {
    color: '#FFFFFF', // Color del texto de los enlaces
    margin: '0 10px', // Espacio horizontal entre enlaces
    fontWeight: '500', // Peso de la fuente
    fontSize: '16px', // Tamaño de fuente
    transition: 'color 0.3s ease', // Transición suave para el color
};

const navLinkHoverStyle = {
    color: '#CD212A', // Color al pasar el ratón sobre el enlace
};

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark" style={navbarStyle}>
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src="https://i.pinimg.com/originals/86/b4/0a/86b40a0306f5187123c3f1a5c1bbe4ca.png" alt="Logo" style={logoStyle} />
                    Alfa Romeo
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#" style={navLinkStyle} onMouseOver={e => e.target.style.color = navLinkHoverStyle.color} onMouseOut={e => e.target.style.color = navLinkStyle.color}>
                                Inicio <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" style={navLinkStyle} onMouseOver={e => e.target.style.color = navLinkHoverStyle.color} onMouseOut={e => e.target.style.color = navLinkStyle.color}>
                                Vehículos
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" style={navLinkStyle} onMouseOver={e => e.target.style.color = navLinkHoverStyle.color} onMouseOut={e => e.target.style.color = navLinkStyle.color}>
                                Servicios
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" style={navLinkStyle} onMouseOver={e => e.target.style.color = navLinkHoverStyle.color} onMouseOut={e => e.target.style.color = navLinkStyle.color}>
                                Contacto
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
