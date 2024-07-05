import {create} from 'zustand';
import {RentalDetails} from '../screens/RentalDetails/models/RentalDetails';

interface RentalDetailsState {
  rentalDetails?: RentalDetails[] | null;
  setRentalDetails: (rentalDetails?: RentalDetails[] | null) => void;
}

const useRentalDetailsStore = create<RentalDetailsState>(set => ({
  rentalDetails: undefined,
  setRentalDetails: rentalDetails => set({rentalDetails}),
}));

export default useRentalDetailsStore;
