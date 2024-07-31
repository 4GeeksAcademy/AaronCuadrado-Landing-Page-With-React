import React from "react";

const cardStyle = {
    border: 'none',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    backgroundColor: '#FFFFFF', // Fondo blanco para las tarjetas
};

const cardImgStyle = {
    height: '200px',
    objectFit: 'cover',
};

const cardBodyStyle = {
    padding: '20px',
    backgroundColor: '#F9F9F9', // Fondo ligeramente gris para el cuerpo
};

const cardTitleStyle = {
    color: '#008C8C', // Color verde italiano para los títulos
    fontWeight: '600',
    marginBottom: '10px',
};

const cardTextStyle = {
    color: '#333',
    fontSize: '16px',
};

const cardHoverStyle = {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
};

const Card = ({ title, content, image }) => {
    return (
        <div className="col-md-4 mb-4">
            <div className="card" style={cardStyle} onMouseOver={e => e.currentTarget.style.transform = cardHoverStyle.transform} onMouseOut={e => e.currentTarget.style.transform = 'none'}>
                <img src={image} className="card-img-top" alt={title} style={cardImgStyle} />
                <div className="card-body" style={cardBodyStyle}>
                    <h5 className="card-title" style={cardTitleStyle}>{title}</h5>
                    <p className="card-text" style={cardTextStyle}>{content}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;

