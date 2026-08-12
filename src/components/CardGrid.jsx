import React from 'react';
import './CardGrid.css';

/**
 * A layout component that organizes child elements into a responsive grid structure.
 * 
 * @param {Object} props - Component properties.
 * @param {React.ReactNode} props.children - Elements to be rendered inside the grid.
 * @returns {JSX.Element} The rendered card grid container.
 */
function CardGrid({ children }) {
    return (
        <div className="card-grid">
            {children}
        </div>
    );
}

export default CardGrid;
