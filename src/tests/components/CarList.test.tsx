import { render, screen } from '@testing-library/react';
import CarList from '../../../src/components/CarList';
import { Provider } from 'react-redux';
import { store } from '../../../src/store/store';
import '@testing-library/jest-dom';
import { reserveCar } from '../../../src/features/cars/carSlice';

const renderWithRedux = (component: JSX.Element) => {
  return render(<Provider store={store}>{component}</Provider>);
};

describe('CarList', () => {
  test('renders available cars', () => {
    renderWithRedux(<CarList />);
  
    // Sprawdzanie, czy wyświetlają się odpowiednie typy samochodów
    expect(screen.getAllByText(/sedan/i)).toHaveLength(3);
    expect(screen.getAllByText(/SUV/i)).toHaveLength(3);
    expect(screen.getAllByText(/van/i)).toHaveLength(3);
  });

  test('displays not available cars when reserved', () => {
    // Symulacja rezerwacji samochodu
    store.dispatch(reserveCar({ carId: 1, type: 'sedan', startDate: '2024-10-20', days: 2 }));
  
    renderWithRedux(<CarList />);
  
    // Sprawdzanie, czy samochód sedan jest niedostępny
    expect(screen.getByText(/Not Available/i)).toBeInTheDocument();
  });
});
