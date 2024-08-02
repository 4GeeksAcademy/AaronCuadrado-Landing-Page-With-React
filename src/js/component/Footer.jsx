import React from "react";

const footerStyle = {
    background: 'linear-gradient(to right, #008C8C, #FFFFFF, #CD212A)',
    color: '#000000',
    padding: '20px 0',
    textAlign: 'center',
    borderTop: '1px solid #DDDDDD', 
};

const footerTextStyle = {
    margin: '0',
    fontSize: '16px', 
    lineHeight: '1.5', 
    
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

