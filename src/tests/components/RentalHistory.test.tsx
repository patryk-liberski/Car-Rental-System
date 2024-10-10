import { render, screen, fireEvent } from '@testing-library/react';
import RentalHistory from '../../../src/components/RentalHistory';
import { Provider } from 'react-redux';
import { store } from '../../../src/store/store';
import { reserveCar } from '../../../src/features/cars/carSlice';
import '@testing-library/jest-dom';


const renderWithRedux = (component: JSX.Element) => {
  return render(<Provider store={store}>{component}</Provider>);
};

describe('RentalHistory', () => {
  beforeEach(() => {
    // Dodanie wypożyczonego samochodu do stanu
    store.dispatch(
      reserveCar({
        carId: 1,
        type: 'sedan',
        startDate: '2024-10-20',
        days: 2,
      })
    );
  });

  test('renders rental history correctly', () => {
    renderWithRedux(<RentalHistory />);

    // Sprawdzenie, czy historia wypożyczeń zawiera zarezerwowane auto
    expect(screen.getByText(/Car ID: 1, Start Date: 2024-10-20, Days: 2/i)).toBeInTheDocument();
  });

  test('allows returning a rented car', () => {
    renderWithRedux(<RentalHistory />);

    // Sprawdzenie, czy przycisk "Return" istnieje
    const returnButton = screen.getByRole('button', { name: /Return/i });
    expect(returnButton).toBeInTheDocument();

    // Kliknięcie przycisku zwrotu samochodu
    fireEvent.click(returnButton);

    // Sprawdzenie, czy samochód został zwrócony (brak w historii)
    expect(screen.queryByText(/Car ID: 1/i)).not.toBeInTheDocument();
  });
});
