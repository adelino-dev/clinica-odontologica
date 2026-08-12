import './Card.css';

function Card({ title, description, image, imageAlt }) {
    return (
        <div className="card-container">
            <img src={image} alt={imageAlt} className="card-image" />
            <div className="card-text">
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
            </div>
        </div>
    );
}

export default Card;