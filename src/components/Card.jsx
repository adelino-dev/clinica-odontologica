import './Card.css';

/**
 * An individual card component containing a descriptive image, a title, and descriptive text.
 * 
 * @param {Object} props - Component properties.
 * @param {string} props.title - The title of the card.
 * @param {string} props.description - The descriptive text of the card.
 * @param {string} props.image - The path or URL of the card's image.
 * @param {string} [props.imageAlt] - The alternative accessibility text for the image.
 * @returns {JSX.Element} The rendered card element.
 */
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