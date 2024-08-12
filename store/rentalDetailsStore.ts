import {RentalDetails} from '../screens/RentalDetails/models/RentalDetails';
import {createWithEqualityFn} from 'zustand/traditional';
import {shallow} from 'zustand/shallow';

interface RentalDetailsState {
  rentalDetails?: RentalDetails[] | null;
  setRentalDetails: (rentalDetails?: RentalDetails[] | null) => void;
}

const useRentalDetailsStore = createWithEqualityFn<RentalDetailsState>(
  set => ({
    rentalDetails: undefined,
    setRentalDetails: rentalDetails => set({rentalDetails}),
  }),
  shallow,
);

export default useRentalDetailsStore;
