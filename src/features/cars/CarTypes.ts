export interface Car {
  id: number;
  type: 'sedan' | 'SUV' | 'van';
  available: boolean;
}

export interface Rental {
  carId: number;
  startDate: string;
  days: number;
}
