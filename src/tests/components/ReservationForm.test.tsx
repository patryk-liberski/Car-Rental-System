import { render, screen, fireEvent } from '@testing-library/react';
import ReservationForm from '../../components/ReservationForm';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

const renderWithRedux = (component: JSX.Element) => {
  return render(<Provider store={store}>{component}</Provider>);
};

describe('ReservationForm', () => {
  test('renders the form with inputs and button', () => {
    renderWithRedux(<ReservationForm />);
  
    expect(screen.getByLabelText(/Car Type/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Start Date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Days/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Reserve/i })).toBeInTheDocument();
  });
  
  test('enables the Reserve button when valid data is provided', () => {
    renderWithRedux(<ReservationForm />);
  
    fireEvent.change(screen.getByLabelText(/Start Date/i), {
      target: { value: '2024-10-20' },
    });
  
    fireEvent.change(screen.getByLabelText(/Car Type/i), {
      target: { value: 'SUV' },
    });
  
    fireEvent.change(screen.getByLabelText(/Days/i), {
      target: { value: '2' },
    });
  
    const reserveButton = screen.getByRole('button', { name: /Reserve/i });
    expect(reserveButton).not.toBeDisabled();
  });
});
