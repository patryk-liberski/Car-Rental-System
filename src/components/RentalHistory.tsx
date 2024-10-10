import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { returnCar } from '../features/cars/carSlice';
import '../styles/RentalHistory.scss';

const RentalHistory: React.FC = () => {
  // Extract the list of rentals from the Redux store
  const rentals = useSelector((state: RootState) => state.cars.rentals);

  // Set up the dispatch function to trigger actions
  const dispatch = useDispatch();

  return (
    <div className="rental-history">
      {/* Header for the rental history section */}
      <h2 className="rental-history__header">Rental History</h2>

      <ul className="list">
        {/* Loop through the list of rentals and display each rental */}
        {rentals.map((rental, index) => (
          <li key={index} className="list__item">
            {/* Display car details and rental information */}
            Car ID: {rental.carId}, Start Date: {rental.startDate}, Days: {rental.days}

            {/* Button to return the car, triggering the returnCar action */}
            <button 
              onClick={() => dispatch(returnCar(rental.carId))} 
              className="list__item__button"
            >
              Return
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RentalHistory;