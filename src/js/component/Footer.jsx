import React from "react";

const footerStyle = {
    background: 'linear-gradient(to right, #008C8C, #FFFFFF, #CD212A)', // Gradiente tricolor bandera italiana
    color: '#000000', // Color de texto gris claro para un buen contraste
    padding: '20px 0', // Espaciado para el contenido del pie de página
    textAlign: 'center',
    borderTop: '1px solid #DDDDDD', // Línea sutil en la parte superior del pie de página
};

const footerTextStyle = {
    margin: '0',
    fontSize: '16px', // Tamaño de fuente más grande para mejor legibilidad
    lineHeight: '1.5', // Mayor altura de línea para espacio entre líneas
    
};

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <div className="container">
                <p style={footerTextStyle}>
                ©2024 Alfa Romeo All Rights Reserved<br/>
                By Aaron Cuadrado Toral
                </p>
            </div>
        </footer>
    );
}

export default Footer;

