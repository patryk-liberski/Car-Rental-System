import carReducer, { reserveCar, returnCar } from '../../../../src/features/cars/carSlice';

describe('carSlice', () => {
  const initialState: {
    availableCars: { id: number; type: 'sedan' | 'SUV' | 'van'; available: boolean }[];
    rentals: never[];
  } = {
    availableCars: [
      { id: 1, type: 'sedan', available: true },
      { id: 2, type: 'sedan', available: true },
      { id: 3, type: 'SUV', available: true },
    ],
    rentals: [],
  };

  test('should reserve a car', () => {
    const newState = carReducer(
      initialState,
      reserveCar({ carId: 1, type: 'sedan', startDate: '2024-10-20', days: 2 })
    );

    expect(newState.availableCars[0].available).toBe(false);
    expect(newState.rentals.length).toBe(1);
  });

  test('should return a car', () => {
    const reservedState = carReducer(
      initialState,
      reserveCar({ carId: 1, type: 'sedan', startDate: '2024-10-20', days: 2 })
    );

    const newState = carReducer(reservedState, returnCar(1));

    expect(newState.availableCars[0].available).toBe(true);
    expect(newState.rentals.length).toBe(0);
  });
});
