import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import '../styles/CarList.scss';

const CarList: React.FC = () => {
  // Select the list of available cars from the Redux store
  const availableCars = useSelector((state: RootState) => state.cars.availableCars);

  return (
    <div className="list">
      {/* Header for the available cars list */}
      <h2 className="list__header">Available Cars</h2>

      <ul className="list">
        {/* Loop through the availableCars array and render each car */}
        {availableCars.map((car) => (
          <li 
            key={car.id} 
            // Apply a conditional class based on car availability
            className={`list__item ${car.available ? 'list__item--available' : 'list__item--unavailable'}`}
          >
            {/* Display the car type and availability status */}
            {car.type} {car.available ? '(Available)' : '(Not Available)'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarList;