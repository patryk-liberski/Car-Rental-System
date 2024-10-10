import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { reserveCar } from '../features/cars/carSlice';
import '../styles/ReservationForm.scss';

const ReservationForm: React.FC = () => {
  // Dispatch hook to send actions to the Redux store
  const dispatch = useDispatch();

  // Selector to retrieve available cars from the Redux store
  const availableCars = useSelector((state: RootState) => state.cars.availableCars);

  // Local state for managing form inputs
  const [carType, setCarType] = useState<'sedan' | 'SUV' | 'van'>('sedan');
  const [startDate, setStartDate] = useState<string>('');
  const [days, setDays] = useState<number>(1);
  const [errorMessage, setErrorMessage] = useState<string>('');

  // Form submission handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Get today's date in YYYY-MM-DD format
    const today = new Date().toISOString().split('T')[0];

    // Validate if the start date is selected
    if (!startDate) {
      setErrorMessage('Please select a start date.');
      return;
    }

    // Validate if the start date is not in the past
    if (startDate < today) {
      setErrorMessage('The start date cannot be in the past.');
      return;
    }

    // Validate if the number of rental days is greater than 0
    if (days <= 0) {
      setErrorMessage('The number of days must be greater than 0.');
      return;
    }

    // Find an available car of the selected type
    const selectedCar = availableCars.find(car => car.type === carType && car.available);
    if (selectedCar) {
      // Dispatch the reserveCar action if an available car is found
      dispatch(reserveCar({ carId: selectedCar.id, type: selectedCar.type, startDate, days }));
      setErrorMessage(''); // Clear error message after successful reservation
    } else {
      // Set error message if no cars of the selected type are available
      setErrorMessage(`No available cars of type ${carType}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h1 className="form__header">Reserve a Car</h1>

      {/* Display error message if any */}
      {errorMessage && <p className="form__error">{errorMessage}</p>}

      {/* Car type selection */}
      <label className="form__label" htmlFor="carType">Car Type</label>
      <select
        id="carType"
        value={carType}
        onChange={(e) => setCarType(e.target.value as 'sedan' | 'SUV' | 'van')}
        className="form__select"
      >
        <option value="sedan">Sedan</option>
        <option value="SUV">SUV</option>
        <option value="van">Van</option>
      </select>

      {/* Start date input */}
      <label className="form__label" htmlFor="startDate">Start Date</label>
      <input
        id="startDate"
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        className="form__input"
      />

      {/* Number of days input */}
      <label className="form__label" htmlFor="days">Days</label>
      <input
        id="days"
        type="number"
        value={days}
        onChange={(e) => setDays(Number(e.target.value))}
        className="form__input"
        min="1"
      />

      {/* Submit button */}
      <button type="submit" className="form__button">Reserve</button>
    </form>
  );
};

export default ReservationForm;
