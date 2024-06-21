/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type ModelRentalFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  isAvailable?: ModelBooleanInput | null,
  rating?: ModelFloatInput | null,
  userID?: ModelIDInput | null,
  category?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelRentalFilterInput | null > | null,
  or?: Array< ModelRentalFilterInput | null > | null,
  not?: ModelRentalFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelRentalConnection = {
  __typename: "ModelRentalConnection",
  items:  Array<Rental | null >,
  nextToken?: string | null,
};

export type Rental = {
  __typename: "Rental",
  id: string,
  title: string,
  description: string,
  isAvailable?: boolean | null,
  prices:  Array<Price >,
  rating?: number | null,
  address: Address,
  location: Location,
  reviews?: ModelReviewConnection | null,
  bookings?: ModelBookingConnection | null,
  userID: string,
  user?: User | null,
  category: number,
  createdAt: string,
  updatedAt: string,
};

export type Price = {
  __typename: "Price",
  amount: number,
  timeIncrement: TimeIncrement,
  isFirmOnPrice: boolean,
};

export enum TimeIncrement {
  HOUR = "HOUR",
  WEEK = "WEEK",
  MONTH = "MONTH",
  DAY = "DAY",
}


export type Address = {
  __typename: "Address",
  street: string,
  street2?: string | null,
  city: string,
  state: string,
  zip: string,
  country: string,
};

export type Location = {
  __typename: "Location",
  latitude: number,
  longitude: number,
};

export type ModelReviewConnection = {
  __typename: "ModelReviewConnection",
  items:  Array<Review | null >,
  nextToken?: string | null,
};

export type Review = {
  __typename: "Review",
  id: string,
  title: string,
  description: string,
  rating?: number | null,
  rentalID: string,
  user?: User | null,
  datePublished: string,
  createdAt: string,
  updatedAt: string,
  reviewUserId?: string | null,
};

export type User = {
  __typename: "User",
  id: string,
  dateJoined: string,
  isOnline: boolean,
  postedRentals?: ModelRentalConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelBookingConnection = {
  __typename: "ModelBookingConnection",
  items:  Array<Booking | null >,
  nextToken?: string | null,
};

export type Booking = {
  __typename: "Booking",
  id: string,
  startDate: string,
  endDate: string,
  user?: User | null,
  rentalID: string,
  createdAt: string,
  updatedAt: string,
  bookingUserId?: string | null,
};

export type CreateBookingInput = {
  id?: string | null,
  startDate: string,
  endDate: string,
  rentalID: string,
  bookingUserId?: string | null,
};

export type ModelBookingConditionInput = {
  startDate?: ModelStringInput | null,
  endDate?: ModelStringInput | null,
  rentalID?: ModelIDInput | null,
  and?: Array< ModelBookingConditionInput | null > | null,
  or?: Array< ModelBookingConditionInput | null > | null,
  not?: ModelBookingConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  bookingUserId?: ModelIDInput | null,
};

export type UpdateBookingInput = {
  id: string,
  startDate?: string | null,
  endDate?: string | null,
  rentalID?: string | null,
  bookingUserId?: string | null,
};

export type DeleteBookingInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  dateJoined: string,
  isOnline: boolean,
};

export type ModelUserConditionInput = {
  dateJoined?: ModelStringInput | null,
  isOnline?: ModelBooleanInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateUserInput = {
  id: string,
  dateJoined?: string | null,
  isOnline?: boolean | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateReviewInput = {
  id?: string | null,
  title: string,
  description: string,
  rating?: number | null,
  rentalID: string,
  datePublished: string,
  reviewUserId?: string | null,
};

export type ModelReviewConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  rating?: ModelFloatInput | null,
  rentalID?: ModelIDInput | null,
  datePublished?: ModelStringInput | null,
  and?: Array< ModelReviewConditionInput | null > | null,
  or?: Array< ModelReviewConditionInput | null > | null,
  not?: ModelReviewConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  reviewUserId?: ModelIDInput | null,
};

export type UpdateReviewInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  rating?: number | null,
  rentalID?: string | null,
  datePublished?: string | null,
  reviewUserId?: string | null,
};

export type DeleteReviewInput = {
  id: string,
};

export type CreateRentalInput = {
  id?: string | null,
  title: string,
  description: string,
  isAvailable?: boolean | null,
  prices: Array< PriceInput >,
  rating?: number | null,
  address: AddressInput,
  location: LocationInput,
  userID: string,
  category: number,
};

export type PriceInput = {
  amount: number,
  timeIncrement: TimeIncrement,
  isFirmOnPrice: boolean,
};

export type AddressInput = {
  street: string,
  street2?: string | null,
  city: string,
  state: string,
  zip: string,
  country: string,
};

export type LocationInput = {
  latitude: number,
  longitude: number,
};

export type ModelRentalConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  isAvailable?: ModelBooleanInput | null,
  rating?: ModelFloatInput | null,
  userID?: ModelIDInput | null,
  category?: ModelIntInput | null,
  and?: Array< ModelRentalConditionInput | null > | null,
  or?: Array< ModelRentalConditionInput | null > | null,
  not?: ModelRentalConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateRentalInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  isAvailable?: boolean | null,
  prices?: Array< PriceInput > | null,
  rating?: number | null,
  address?: AddressInput | null,
  location?: LocationInput | null,
  userID?: string | null,
  category?: number | null,
};

export type DeleteRentalInput = {
  id: string,
};

export type ModelBookingFilterInput = {
  id?: ModelIDInput | null,
  startDate?: ModelStringInput | null,
  endDate?: ModelStringInput | null,
  rentalID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelBookingFilterInput | null > | null,
  or?: Array< ModelBookingFilterInput | null > | null,
  not?: ModelBookingFilterInput | null,
  bookingUserId?: ModelIDInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  dateJoined?: ModelStringInput | null,
  isOnline?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelReviewFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  rating?: ModelFloatInput | null,
  rentalID?: ModelIDInput | null,
  datePublished?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelReviewFilterInput | null > | null,
  or?: Array< ModelReviewFilterInput | null > | null,
  not?: ModelReviewFilterInput | null,
  reviewUserId?: ModelIDInput | null,
};

export type ModelSubscriptionBookingFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  startDate?: ModelSubscriptionStringInput | null,
  endDate?: ModelSubscriptionStringInput | null,
  rentalID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBookingFilterInput | null > | null,
  or?: Array< ModelSubscriptionBookingFilterInput | null > | null,
  bookingUserId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  dateJoined?: ModelSubscriptionStringInput | null,
  isOnline?: ModelSubscriptionBooleanInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionReviewFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  rating?: ModelSubscriptionFloatInput | null,
  rentalID?: ModelSubscriptionIDInput | null,
  datePublished?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionReviewFilterInput | null > | null,
  or?: Array< ModelSubscriptionReviewFilterInput | null > | null,
  reviewUserId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionRentalFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  isAvailable?: ModelSubscriptionBooleanInput | null,
  rating?: ModelSubscriptionFloatInput | null,
  userID?: ModelSubscriptionIDInput | null,
  category?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionRentalFilterInput | null > | null,
  or?: Array< ModelSubscriptionRentalFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ListRentalsWithAllDetailsQueryVariables = {
  filter?: ModelRentalFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRentalsWithAllDetailsQuery = {
  listRentals?:  {
    __typename: "ModelRentalConnection",
    items:  Array< {
      __typename: "Rental",
      id: string,
      title: string,
      prices:  Array< {
        __typename: "Price",
        amount: number,
        timeIncrement: TimeIncrement,
        isFirmOnPrice: boolean,
      } >,
      rating?: number | null,
      address:  {
        __typename: "Address",
        street: string,
        street2?: string | null,
        city: string,
        state: string,
        zip: string,
        country: string,
      },
      location:  {
        __typename: "Location",
        latitude: number,
        longitude: number,
      },
      reviews?:  {
        __typename: "ModelReviewConnection",
        nextToken?: string | null,
      } | null,
      userID: string,
      category: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CreateBookingMutationVariables = {
  input: CreateBookingInput,
  condition?: ModelBookingConditionInput | null,
};

export type CreateBookingMutation = {
  createBooking?:  {
    __typename: "Booking",
    id: string,
    startDate: string,
    endDate: string,
    user?:  {
      __typename: "User",
      id: string,
      dateJoined: string,
      isOnline: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    rentalID: string,
    createdAt: string,
    updatedAt: string,
    bookingUserId?: string | null,
  } | null,
};

export type UpdateBookingMutationVariables = {
  input: UpdateBookingInput,
  condition?: ModelBookingConditionInput | null,
};

export type UpdateBookingMutation = {
  updateBooking?:  {
    __typename: "Booking",
    id: string,
    startDate: string,
    endDate: string,
    user?:  {
      __typename: "User",
      id: string,
      dateJoined: string,
      isOnline: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    rentalID: string,
    createdAt: string,
    updatedAt: string,
    bookingUserId?: string | null,
  } | null,
};

export type DeleteBookingMutationVariables = {
  input: DeleteBookingInput,
  condition?: ModelBookingConditionInput | null,
};

export type DeleteBookingMutation = {
  deleteBooking?:  {
    __typename: "Booking",
    id: string,
    startDate: string,
    endDate: string,
    user?:  {
      __typename: "User",
      id: string,
      dateJoined: string,
      isOnline: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    rentalID: string,
    createdAt: string,
    updatedAt: string,
    bookingUserId?: string | null,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    dateJoined: string,
    isOnline: boolean,
    postedRentals?:  {
      __typename: "ModelRentalConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    dateJoined: string,
    isOnline: boolean,
    postedRentals?:  {
      __typename: "ModelRentalConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    dateJoined: string,
    isOnline: boolean,
    postedRentals?:  {
      __typename: "ModelRentalConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateReviewMutationVariables = {
  input: CreateReviewInput,
  condition?: ModelReviewConditionInput | null,
};

export type CreateReviewMutation = {
  createReview?:  {
    __typename: "Review",
    id: string,
    title: string,
    description: string,
    rating?: number | null,
    rentalID: string,
    user?:  {
      __typename: "User",
      id: string,
      dateJoined: string,
      isOnline: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    datePublished: string,
    createdAt: string,
    updatedAt: string,
    reviewUserId?: string | null,
  } | null,
};

export type UpdateReviewMutationVariables = {
  input: UpdateReviewInput,
  condition?: ModelReviewConditionInput | null,
};

export type UpdateReviewMutation = {
  updateReview?:  {
    __typename: "Review",
    id: string,
    title: string,
    description: string,
    rating?: number | null,
    rentalID: string,
    user?:  {
      __typename: "User",
      id: string,
      dateJoined: string,
      isOnline: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    datePublished: string,
    createdAt: string,
    updatedAt: string,
    reviewUserId?: string | null,
  } | null,
};

export type DeleteReviewMutationVariables = {
  input: DeleteReviewInput,
  condition?: ModelReviewConditionInput | null,
};

export type DeleteReviewMutation = {
  deleteReview?:  {
    __typename: "Review",
    id: string,
    title: string,
    description: string,
    rating?: number | null,
    rentalID: string,
    user?:  {
      __typename: "User",
      id: string,
      dateJoined: string,
      isOnline: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    datePublished: string,
    createdAt: string,
    updatedAt: string,
    reviewUserId?: string | null,
  } | null,
};

export type CreateRentalMutationVariables = {
  input: CreateRentalInput,
  condition?: ModelRentalConditionInput | null,
};

export type CreateRentalMutation = {
  createRental?:  {
    __typename: "Rental",
    id: string,
    title: string,
    description: string,
    isAvailable?: boolean | null,
    prices:  Array< {
      __typename: "Price",
      amount: number,
      timeIncrement: TimeIncrement,
      isFirmOnPrice: boolean,
    } >,
    rating?: number | null,
    address:  {
      __typename: "Address",
      street: string,
      street2?: string | null,
      city: string,
      state: string,
      zip: string,
      country: string,
    },
    location:  {
      __typename: "Location",
      latitude: number,
      longitude: number,
    },
    reviews?:  {
      __typename: "ModelReviewConnection",
      nextToken?: string | null,
    } | null,
    bookings?:  {
      __typename: "ModelBookingConnection",
      nextToken?: string | null,
    } | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      dateJoined: string,
      isOnline: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    category: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateRentalMutationVariables = {
  input: UpdateRentalInput,
  condition?: ModelRentalConditionInput | null,
};

export type UpdateRentalMutation = {
  updateRental?:  {
    __typename: "Rental",
    id: string,
    title: string,
    description: string,
    isAvailable?: boolean | null,
    prices:  Array< {
      __typename: "Price",
      amount: number,
      timeIncrement: TimeIncrement,
      isFirmOnPrice: boolean,
    } >,
    rating?: number | null,
    address:  {
      __typename: "Address",
      street: string,
      street2?: string | null,
      city: string,
      state: string,
      zip: string,
      country: string,
    },
    location:  {
      __typename: "Location",
      latitude: number,
      longitude: number,
    },
    reviews?:  {
      __typename: "ModelReviewConnection",
      nextToken?: string | null,
    } | null,
    bookings?:  {
      __typename: "ModelBookingConnection",
      nextToken?: string | null,
    } | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      dateJoined: string,
      isOnline: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    category: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteRentalMutationVariables = {
  input: DeleteRentalInput,
  condition?: ModelRentalConditionInput | null,
};

export type DeleteRentalMutation = {
  deleteRental?:  {
    __typename: "Rental",
    id: string,
    title: string,
    description: string,
    isAvailable?: boolean | null,
    prices:  Array< {
      __typename: "Price",
      amount: number,
      timeIncrement: TimeIncrement,
      isFirmOnPrice: boolean,
    } >,
    rating?: number | null,
    address:  {
      __typename: "Address",
      street: string,
      street2?: string | null,
      city: string,
      state: string,
      zip: string,
      country: string,
    },
    location:  {
      __typename: "Location",
      latitude: number,
      longitude: number,
    },
    reviews?:  {
      __typename: "ModelReviewConnection",
      nextToken?: string | null,
    } | null,
    bookings?:  {
      __typename: "ModelBookingConnection",
      nextToken?: string | null,
    } | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      dateJoined: string,
      isOnline: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    category: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetBookingQueryVariables = {
  id: string,
};

export type GetBookingQuery = {
  getBooking?:  {
    __typename: "Booking",
    id: string,
    startDate: string,
    endDate: string,
    user?:  {
      __typename: "User",
      id: string,
      dateJoined: string,
      isOnline: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    rentalID: string,
    createdAt: string,
    updatedAt: string,
    bookingUserId?: string | null,
  } | null,
};

export type ListBookingsQueryVariables = {
  filter?: ModelBookingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBookingsQuery = {
  listBookings?:  {
    __typename: "ModelBookingConnection",
    items:  Array< {
      __typename: "Booking",
      id: string,
      startDate: string,
      endDate: string,
      rentalID: string,
      createdAt: string,
      updatedAt: string,
      bookingUserId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type BookingsByRentalIDQueryVariables = {
  rentalID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBookingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BookingsByRentalIDQuery = {
  bookingsByRentalID?:  {
    __typename: "ModelBookingConnection",
    items:  Array< {
      __typename: "Booking",
      id: string,
      startDate: string,
      endDate: string,
      rentalID: string,
      createdAt: string,
      updatedAt: string,
      bookingUserId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    dateJoined: string,
    isOnline: boolean,
    postedRentals?:  {
      __typename: "ModelRentalConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      dateJoined: string,
      isOnline: boolean,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetReviewQueryVariables = {
  id: string,
};

export type GetReviewQuery = {
  getReview?:  {
    __typename: "Review",
    id: string,
    title: string,
    description: string,
    rating?: number | null,
    rentalID: string,
    user?:  {
      __typename: "User",
      id: string,
      dateJoined: string,
      isOnline: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    datePublished: string,
    createdAt: string,
    updatedAt: string,
    reviewUserId?: string | null,
  } | null,
};

export type ListReviewsQueryVariables = {
  filter?: ModelReviewFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListReviewsQuery = {
  listReviews?:  {
    __typename: "ModelReviewConnection",
    items:  Array< {
      __typename: "Review",
      id: string,
      title: string,
      description: string,
      rating?: number | null,
      rentalID: string,
      datePublished: string,
      createdAt: string,
      updatedAt: string,
      reviewUserId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ReviewsByRentalIDQueryVariables = {
  rentalID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelReviewFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ReviewsByRentalIDQuery = {
  reviewsByRentalID?:  {
    __typename: "ModelReviewConnection",
    items:  Array< {
      __typename: "Review",
      id: string,
      title: string,
      description: string,
      rating?: number | null,
      rentalID: string,
      datePublished: string,
      createdAt: string,
      updatedAt: string,
      reviewUserId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetRentalQueryVariables = {
  id: string,
};

export type GetRentalQuery = {
  getRental?:  {
    __typename: "Rental",
    id: string,
    title: string,
    description: string,
    isAvailable?: boolean | null,
    prices:  Array< {
      __typename: "Price",
      amount: number,
      timeIncrement: TimeIncrement,
      isFirmOnPrice: boolean,
    } >,
    rating?: number | null,
    address:  {
      __typename: "Address",
      street: string,
      street2?: string | null,
      city: string,
      state: string,
      zip: string,
      country: string,
    },
    location:  {
      __typename: "Location",
      latitude: number,
      longitude: number,
    },
    reviews?:  {
      __typename: "ModelReviewConnection",
      nextToken?: string | null,
    } | null,
    bookings?:  {
      __typename: "ModelBookingConnection",
      nextToken?: string | null,
    } | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      dateJoined: string,
      isOnline: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    category: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListRentalsQueryVariables = {
  filter?: ModelRentalFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRentalsQuery = {
  listRentals?:  {
    __typename: "ModelRentalConnection",
    items:  Array< {
      __typename: "Rental",
      id: string,
      title: string,
      description: string,
      isAvailable?: boolean | null,
      rating?: number | null,
      userID: string,
      category: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type RentalsByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelRentalFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type RentalsByUserIDQuery = {
  rentalsByUserID?:  {
    __typename: "ModelRentalConnection",
    items:  Array< {
      __typename: "Rental",
      id: string,
      title: string,
      description: string,
      isAvailable?: boolean | null,
      rating?: number | null,
      userID: string,
      category: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateBookingSubscriptionVariables = {
  filter?: ModelSubscriptionBookingFilterInput | null,
};

export type OnCreateBookingSubscription = {
  onCreateBooking?:  {
    __typename: "Booking",
    id: string,
    startDate: string,
    endDate: string,
    user?:  {
      __typename: "User",
      id: string,
      dateJoined: string,
      isOnline: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    rentalID: string,
    createdAt: string,
    updatedAt: string,
    bookingUserId?: string | null,
  } | null,
};

export type OnUpdateBookingSubscriptionVariables = {
  filter?: ModelSubscriptionBookingFilterInput | null,
};

export type OnUpdateBookingSubscription = {
  onUpdateBooking?:  {
    __typename: "Booking",
    id: string,
    startDate: string,
    endDate: string,
    user?:  {
      __typename: "User",
      id: string,
      dateJoined: string,
      isOnline: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    rentalID: string,
    createdAt: string,
    updatedAt: string,
    bookingUserId?: string | null,
  } | null,
};

export type OnDeleteBookingSubscriptionVariables = {
  filter?: ModelSubscriptionBookingFilterInput | null,
};

export type OnDeleteBookingSubscription = {
  onDeleteBooking?:  {
    __typename: "Booking",
    id: string,
    startDate: string,
    endDate: string,
    user?:  {
      __typename: "User",
      id: string,
      dateJoined: string,
      isOnline: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    rentalID: string,
    createdAt: string,
    updatedAt: string,
    bookingUserId?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    dateJoined: string,
    isOnline: boolean,
    postedRentals?:  {
      __typename: "ModelRentalConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    dateJoined: string,
    isOnline: boolean,
    postedRentals?:  {
      __typename: "ModelRentalConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    dateJoined: string,
    isOnline: boolean,
    postedRentals?:  {
      __typename: "ModelRentalConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateReviewSubscriptionVariables = {
  filter?: ModelSubscriptionReviewFilterInput | null,
};

export type OnCreateReviewSubscription = {
  onCreateReview?:  {
    __typename: "Review",
    id: string,
    title: string,
    description: string,
    rating?: number | null,
    rentalID: string,
    user?:  {
      __typename: "User",
      id: string,
      dateJoined: string,
      isOnline: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    datePublished: string,
    createdAt: string,
    updatedAt: string,
    reviewUserId?: string | null,
  } | null,
};

export type OnUpdateReviewSubscriptionVariables = {
  filter?: ModelSubscriptionReviewFilterInput | null,
};

export type OnUpdateReviewSubscription = {
  onUpdateReview?:  {
    __typename: "Review",
    id: string,
    title: string,
    description: string,
    rating?: number | null,
    rentalID: string,
    user?:  {
      __typename: "User",
      id: string,
      dateJoined: string,
      isOnline: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    datePublished: string,
    createdAt: string,
    updatedAt: string,
    reviewUserId?: string | null,
  } | null,
};

export type OnDeleteReviewSubscriptionVariables = {
  filter?: ModelSubscriptionReviewFilterInput | null,
};

export type OnDeleteReviewSubscription = {
  onDeleteReview?:  {
    __typename: "Review",
    id: string,
    title: string,
    description: string,
    rating?: number | null,
    rentalID: string,
    user?:  {
      __typename: "User",
      id: string,
      dateJoined: string,
      isOnline: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    datePublished: string,
    createdAt: string,
    updatedAt: string,
    reviewUserId?: string | null,
  } | null,
};

export type OnCreateRentalSubscriptionVariables = {
  filter?: ModelSubscriptionRentalFilterInput | null,
};

export type OnCreateRentalSubscription = {
  onCreateRental?:  {
    __typename: "Rental",
    id: string,
    title: string,
    description: string,
    isAvailable?: boolean | null,
    prices:  Array< {
      __typename: "Price",
      amount: number,
      timeIncrement: TimeIncrement,
      isFirmOnPrice: boolean,
    } >,
    rating?: number | null,
    address:  {
      __typename: "Address",
      street: string,
      street2?: string | null,
      city: string,
      state: string,
      zip: string,
      country: string,
    },
    location:  {
      __typename: "Location",
      latitude: number,
      longitude: number,
    },
    reviews?:  {
      __typename: "ModelReviewConnection",
      nextToken?: string | null,
    } | null,
    bookings?:  {
      __typename: "ModelBookingConnection",
      nextToken?: string | null,
    } | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      dateJoined: string,
      isOnline: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    category: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateRentalSubscriptionVariables = {
  filter?: ModelSubscriptionRentalFilterInput | null,
};

export type OnUpdateRentalSubscription = {
  onUpdateRental?:  {
    __typename: "Rental",
    id: string,
    title: string,
    description: string,
    isAvailable?: boolean | null,
    prices:  Array< {
      __typename: "Price",
      amount: number,
      timeIncrement: TimeIncrement,
      isFirmOnPrice: boolean,
    } >,
    rating?: number | null,
    address:  {
      __typename: "Address",
      street: string,
      street2?: string | null,
      city: string,
      state: string,
      zip: string,
      country: string,
    },
    location:  {
      __typename: "Location",
      latitude: number,
      longitude: number,
    },
    reviews?:  {
      __typename: "ModelReviewConnection",
      nextToken?: string | null,
    } | null,
    bookings?:  {
      __typename: "ModelBookingConnection",
      nextToken?: string | null,
    } | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      dateJoined: string,
      isOnline: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    category: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteRentalSubscriptionVariables = {
  filter?: ModelSubscriptionRentalFilterInput | null,
};

export type OnDeleteRentalSubscription = {
  onDeleteRental?:  {
    __typename: "Rental",
    id: string,
    title: string,
    description: string,
    isAvailable?: boolean | null,
    prices:  Array< {
      __typename: "Price",
      amount: number,
      timeIncrement: TimeIncrement,
      isFirmOnPrice: boolean,
    } >,
    rating?: number | null,
    address:  {
      __typename: "Address",
      street: string,
      street2?: string | null,
      city: string,
      state: string,
      zip: string,
      country: string,
    },
    location:  {
      __typename: "Location",
      latitude: number,
      longitude: number,
    },
    reviews?:  {
      __typename: "ModelReviewConnection",
      nextToken?: string | null,
    } | null,
    bookings?:  {
      __typename: "ModelBookingConnection",
      nextToken?: string | null,
    } | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      dateJoined: string,
      isOnline: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    category: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
