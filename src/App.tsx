import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { store } from './store/store';
import CarList from './components/CarList';
import ReservationForm from './components/ReservationForm';
import RentalHistory from './components/RentalHistory';
import { RootState } from './store/store';
import './styles/App.scss';

// Main App component wrapped in Redux Provider to give access to the Redux store
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="app-container">
        {/* Form for reserving a car */}
        <ReservationForm />
        
        {/* Columns component to display car lists and rental history */}
        <Columns />
      </div>
    </Provider>
  );
};

// Columns component dynamically adjusts layout based on rental history
const Columns: React.FC = () => {
  // Use useSelector to access rentals from the Redux store
  const rentals = useSelector((state: RootState) => state.cars.rentals);

  return (
    // Apply a different class if there are no rentals (single column layout)
    <div className={`columns-container ${rentals.length > 0 ? '' : 'single-column'}`}>
      <div className="column">
        {/* Display the list of available cars */}
        <CarList />
      </div>
      {rentals.length > 0 && (
        <div className="column">
          {/* Display rental history only if there are rentals */}
          <RentalHistory />
        </div>
      )}
    </div>
  );
};

export default App;
