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
  latitude?: ModelFloatInput | null,
  longitude?: ModelFloatInput | null,
  isFirmOnPrice?: ModelBooleanInput | null,
  amountHourly?: ModelIntInput | null,
  amountWeekly?: ModelIntInput | null,
  amountDaily?: ModelIntInput | null,
  allowedStartDates?: ModelStringInput | null,
  allowedEndDates?: ModelStringInput | null,
  bookingStartDates?: ModelStringInput | null,
  bookingEndDates?: ModelStringInput | null,
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
  rating?: number | null,
  address: Address,
  reviews?: ModelReviewConnection | null,
  bookings?: ModelBookingConnection | null,
  userID: string,
  user?: User | null,
  category: number,
  latitude: number,
  longitude: number,
  isFirmOnPrice: boolean,
  amountHourly?: number | null,
  amountWeekly?: number | null,
  amountDaily?: number | null,
  allowedStartDates?: Array< string | null > | null,
  allowedEndDates?: Array< string | null > | null,
  bookingStartDates?: Array< string | null > | null,
  bookingEndDates?: Array< string | null > | null,
  createdAt: string,
  updatedAt: string,
};

export type Address = {
  __typename: "Address",
  street: string,
  street2?: string | null,
  city: string,
  state: string,
  zip: string,
  country: string,
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
  datePublished: string,
  userID: string,
  user?: User | null,
  rental?: Rental | null,
  createdAt: string,
  updatedAt: string,
};

export type User = {
  __typename: "User",
  id: string,
  dateJoined: string,
  postedRentals?: ModelRentalConnection | null,
  bookings?: ModelBookingConnection | null,
  reviews?: ModelReviewConnection | null,
  bookmarks?: ModelBookmarkedRentalConnection | null,
  phone?: string | null,
  isPhoneVerified?: boolean | null,
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
  rentalID: string,
  userID: string,
  rental?: Rental | null,
  isAccepted: boolean,
  createdAt: string,
  updatedAt: string,
};

export type ModelBookmarkedRentalConnection = {
  __typename: "ModelBookmarkedRentalConnection",
  items:  Array<BookmarkedRental | null >,
  nextToken?: string | null,
};

export type BookmarkedRental = {
  __typename: "BookmarkedRental",
  id: string,
  rental?: Rental | null,
  userID: string,
  createdAt: string,
  updatedAt: string,
  bookmarkedRentalRentalId?: string | null,
};

export type ModelBookmarkedRentalFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelBookmarkedRentalFilterInput | null > | null,
  or?: Array< ModelBookmarkedRentalFilterInput | null > | null,
  not?: ModelBookmarkedRentalFilterInput | null,
  bookmarkedRentalRentalId?: ModelIDInput | null,
};

export type CreateBookmarkedRentalInput = {
  id?: string | null,
  userID: string,
  bookmarkedRentalRentalId?: string | null,
};

export type ModelBookmarkedRentalConditionInput = {
  userID?: ModelIDInput | null,
  and?: Array< ModelBookmarkedRentalConditionInput | null > | null,
  or?: Array< ModelBookmarkedRentalConditionInput | null > | null,
  not?: ModelBookmarkedRentalConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  bookmarkedRentalRentalId?: ModelIDInput | null,
};

export type UpdateBookmarkedRentalInput = {
  id: string,
  userID?: string | null,
  bookmarkedRentalRentalId?: string | null,
};

export type DeleteBookmarkedRentalInput = {
  id: string,
};

export type CreateBookingInput = {
  id?: string | null,
  startDate: string,
  endDate: string,
  rentalID: string,
  userID: string,
  isAccepted: boolean,
};

export type ModelBookingConditionInput = {
  startDate?: ModelStringInput | null,
  endDate?: ModelStringInput | null,
  rentalID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  isAccepted?: ModelBooleanInput | null,
  and?: Array< ModelBookingConditionInput | null > | null,
  or?: Array< ModelBookingConditionInput | null > | null,
  not?: ModelBookingConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateBookingInput = {
  id: string,
  startDate?: string | null,
  endDate?: string | null,
  rentalID?: string | null,
  userID?: string | null,
  isAccepted?: boolean | null,
};

export type DeleteBookingInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  dateJoined: string,
  phone?: string | null,
  isPhoneVerified?: boolean | null,
};

export type ModelUserConditionInput = {
  dateJoined?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  isPhoneVerified?: ModelBooleanInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateUserInput = {
  id: string,
  dateJoined?: string | null,
  phone?: string | null,
  isPhoneVerified?: boolean | null,
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
  userID: string,
};

export type ModelReviewConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  rating?: ModelFloatInput | null,
  rentalID?: ModelIDInput | null,
  datePublished?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelReviewConditionInput | null > | null,
  or?: Array< ModelReviewConditionInput | null > | null,
  not?: ModelReviewConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateReviewInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  rating?: number | null,
  rentalID?: string | null,
  datePublished?: string | null,
  userID?: string | null,
};

export type DeleteReviewInput = {
  id: string,
};

export type CreateRentalInput = {
  id?: string | null,
  title: string,
  description: string,
  isAvailable?: boolean | null,
  rating?: number | null,
  address: AddressInput,
  userID: string,
  category: number,
  latitude: number,
  longitude: number,
  isFirmOnPrice: boolean,
  amountHourly?: number | null,
  amountWeekly?: number | null,
  amountDaily?: number | null,
  allowedStartDates?: Array< string | null > | null,
  allowedEndDates?: Array< string | null > | null,
  bookingStartDates?: Array< string | null > | null,
  bookingEndDates?: Array< string | null > | null,
};

export type AddressInput = {
  street: string,
  street2?: string | null,
  city: string,
  state: string,
  zip: string,
  country: string,
};

export type ModelRentalConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  isAvailable?: ModelBooleanInput | null,
  rating?: ModelFloatInput | null,
  userID?: ModelIDInput | null,
  category?: ModelIntInput | null,
  latitude?: ModelFloatInput | null,
  longitude?: ModelFloatInput | null,
  isFirmOnPrice?: ModelBooleanInput | null,
  amountHourly?: ModelIntInput | null,
  amountWeekly?: ModelIntInput | null,
  amountDaily?: ModelIntInput | null,
  allowedStartDates?: ModelStringInput | null,
  allowedEndDates?: ModelStringInput | null,
  bookingStartDates?: ModelStringInput | null,
  bookingEndDates?: ModelStringInput | null,
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
  rating?: number | null,
  address?: AddressInput | null,
  userID?: string | null,
  category?: number | null,
  latitude?: number | null,
  longitude?: number | null,
  isFirmOnPrice?: boolean | null,
  amountHourly?: number | null,
  amountWeekly?: number | null,
  amountDaily?: number | null,
  allowedStartDates?: Array< string | null > | null,
  allowedEndDates?: Array< string | null > | null,
  bookingStartDates?: Array< string | null > | null,
  bookingEndDates?: Array< string | null > | null,
};

export type DeleteRentalInput = {
  id: string,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelBookingFilterInput = {
  id?: ModelIDInput | null,
  startDate?: ModelStringInput | null,
  endDate?: ModelStringInput | null,
  rentalID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  isAccepted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelBookingFilterInput | null > | null,
  or?: Array< ModelBookingFilterInput | null > | null,
  not?: ModelBookingFilterInput | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  dateJoined?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  isPhoneVerified?: ModelBooleanInput | null,
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
  userID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelReviewFilterInput | null > | null,
  or?: Array< ModelReviewFilterInput | null > | null,
  not?: ModelReviewFilterInput | null,
};

export type ModelSubscriptionBookmarkedRentalFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBookmarkedRentalFilterInput | null > | null,
  or?: Array< ModelSubscriptionBookmarkedRentalFilterInput | null > | null,
  bookmarkedRentalRentalId?: ModelSubscriptionIDInput | null,
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

export type ModelSubscriptionBookingFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  startDate?: ModelSubscriptionStringInput | null,
  endDate?: ModelSubscriptionStringInput | null,
  rentalID?: ModelSubscriptionIDInput | null,
  userID?: ModelSubscriptionIDInput | null,
  isAccepted?: ModelSubscriptionBooleanInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBookingFilterInput | null > | null,
  or?: Array< ModelSubscriptionBookingFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  dateJoined?: ModelSubscriptionStringInput | null,
  phone?: ModelSubscriptionStringInput | null,
  isPhoneVerified?: ModelSubscriptionBooleanInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionReviewFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  rating?: ModelSubscriptionFloatInput | null,
  rentalID?: ModelSubscriptionIDInput | null,
  datePublished?: ModelSubscriptionStringInput | null,
  userID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionReviewFilterInput | null > | null,
  or?: Array< ModelSubscriptionReviewFilterInput | null > | null,
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
  latitude?: ModelSubscriptionFloatInput | null,
  longitude?: ModelSubscriptionFloatInput | null,
  isFirmOnPrice?: ModelSubscriptionBooleanInput | null,
  amountHourly?: ModelSubscriptionIntInput | null,
  amountWeekly?: ModelSubscriptionIntInput | null,
  amountDaily?: ModelSubscriptionIntInput | null,
  allowedStartDates?: ModelSubscriptionStringInput | null,
  allowedEndDates?: ModelSubscriptionStringInput | null,
  bookingStartDates?: ModelSubscriptionStringInput | null,
  bookingEndDates?: ModelSubscriptionStringInput | null,
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
      title: string,
      rating?: number | null,
      userID: string,
      amountHourly?: number | null,
      amountDaily?: number | null,
      amountWeekly?: number | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListBookmarkedRentalsWithDetailsQueryVariables = {
  filter?: ModelBookmarkedRentalFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBookmarkedRentalsWithDetailsQuery = {
  listBookmarkedRentals?:  {
    __typename: "ModelBookmarkedRentalConnection",
    items:  Array< {
      __typename: "BookmarkedRental",
      userID: string,
      bookmarkedRentalRentalId?: string | null,
      rental?:  {
        __typename: "Rental",
        isAvailable?: boolean | null,
        rating?: number | null,
        title: string,
        userID: string,
        amountHourly?: number | null,
        amountDaily?: number | null,
        amountWeekly?: number | null,
      } | null,
    } | null >,
  } | null,
};

export type CreateBookmarkedRentalMutationVariables = {
  input: CreateBookmarkedRentalInput,
  condition?: ModelBookmarkedRentalConditionInput | null,
};

export type CreateBookmarkedRentalMutation = {
  createBookmarkedRental?:  {
    __typename: "BookmarkedRental",
    id: string,
    rental?:  {
      __typename: "Rental",
      id: string,
      title: string,
      description: string,
      isAvailable?: boolean | null,
      rating?: number | null,
      userID: string,
      category: number,
      latitude: number,
      longitude: number,
      isFirmOnPrice: boolean,
      amountHourly?: number | null,
      amountWeekly?: number | null,
      amountDaily?: number | null,
      allowedStartDates?: Array< string | null > | null,
      allowedEndDates?: Array< string | null > | null,
      bookingStartDates?: Array< string | null > | null,
      bookingEndDates?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
    bookmarkedRentalRentalId?: string | null,
  } | null,
};

export type UpdateBookmarkedRentalMutationVariables = {
  input: UpdateBookmarkedRentalInput,
  condition?: ModelBookmarkedRentalConditionInput | null,
};

export type UpdateBookmarkedRentalMutation = {
  updateBookmarkedRental?:  {
    __typename: "BookmarkedRental",
    id: string,
    rental?:  {
      __typename: "Rental",
      id: string,
      title: string,
      description: string,
      isAvailable?: boolean | null,
      rating?: number | null,
      userID: string,
      category: number,
      latitude: number,
      longitude: number,
      isFirmOnPrice: boolean,
      amountHourly?: number | null,
      amountWeekly?: number | null,
      amountDaily?: number | null,
      allowedStartDates?: Array< string | null > | null,
      allowedEndDates?: Array< string | null > | null,
      bookingStartDates?: Array< string | null > | null,
      bookingEndDates?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
    bookmarkedRentalRentalId?: string | null,
  } | null,
};

export type DeleteBookmarkedRentalMutationVariables = {
  input: DeleteBookmarkedRentalInput,
  condition?: ModelBookmarkedRentalConditionInput | null,
};

export type DeleteBookmarkedRentalMutation = {
  deleteBookmarkedRental?:  {
    __typename: "BookmarkedRental",
    id: string,
    rental?:  {
      __typename: "Rental",
      id: string,
      title: string,
      description: string,
      isAvailable?: boolean | null,
      rating?: number | null,
      userID: string,
      category: number,
      latitude: number,
      longitude: number,
      isFirmOnPrice: boolean,
      amountHourly?: number | null,
      amountWeekly?: number | null,
      amountDaily?: number | null,
      allowedStartDates?: Array< string | null > | null,
      allowedEndDates?: Array< string | null > | null,
      bookingStartDates?: Array< string | null > | null,
      bookingEndDates?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
    bookmarkedRentalRentalId?: string | null,
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
    rentalID: string,
    userID: string,
    rental?:  {
      __typename: "Rental",
      id: string,
      title: string,
      description: string,
      isAvailable?: boolean | null,
      rating?: number | null,
      userID: string,
      category: number,
      latitude: number,
      longitude: number,
      isFirmOnPrice: boolean,
      amountHourly?: number | null,
      amountWeekly?: number | null,
      amountDaily?: number | null,
      allowedStartDates?: Array< string | null > | null,
      allowedEndDates?: Array< string | null > | null,
      bookingStartDates?: Array< string | null > | null,
      bookingEndDates?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    isAccepted: boolean,
    createdAt: string,
    updatedAt: string,
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
    rentalID: string,
    userID: string,
    rental?:  {
      __typename: "Rental",
      id: string,
      title: string,
      description: string,
      isAvailable?: boolean | null,
      rating?: number | null,
      userID: string,
      category: number,
      latitude: number,
      longitude: number,
      isFirmOnPrice: boolean,
      amountHourly?: number | null,
      amountWeekly?: number | null,
      amountDaily?: number | null,
      allowedStartDates?: Array< string | null > | null,
      allowedEndDates?: Array< string | null > | null,
      bookingStartDates?: Array< string | null > | null,
      bookingEndDates?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    isAccepted: boolean,
    createdAt: string,
    updatedAt: string,
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
    rentalID: string,
    userID: string,
    rental?:  {
      __typename: "Rental",
      id: string,
      title: string,
      description: string,
      isAvailable?: boolean | null,
      rating?: number | null,
      userID: string,
      category: number,
      latitude: number,
      longitude: number,
      isFirmOnPrice: boolean,
      amountHourly?: number | null,
      amountWeekly?: number | null,
      amountDaily?: number | null,
      allowedStartDates?: Array< string | null > | null,
      allowedEndDates?: Array< string | null > | null,
      bookingStartDates?: Array< string | null > | null,
      bookingEndDates?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    isAccepted: boolean,
    createdAt: string,
    updatedAt: string,
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
    postedRentals?:  {
      __typename: "ModelRentalConnection",
      nextToken?: string | null,
    } | null,
    bookings?:  {
      __typename: "ModelBookingConnection",
      nextToken?: string | null,
    } | null,
    reviews?:  {
      __typename: "ModelReviewConnection",
      nextToken?: string | null,
    } | null,
    bookmarks?:  {
      __typename: "ModelBookmarkedRentalConnection",
      nextToken?: string | null,
    } | null,
    phone?: string | null,
    isPhoneVerified?: boolean | null,
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
    postedRentals?:  {
      __typename: "ModelRentalConnection",
      nextToken?: string | null,
    } | null,
    bookings?:  {
      __typename: "ModelBookingConnection",
      nextToken?: string | null,
    } | null,
    reviews?:  {
      __typename: "ModelReviewConnection",
      nextToken?: string | null,
    } | null,
    bookmarks?:  {
      __typename: "ModelBookmarkedRentalConnection",
      nextToken?: string | null,
    } | null,
    phone?: string | null,
    isPhoneVerified?: boolean | null,
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
    postedRentals?:  {
      __typename: "ModelRentalConnection",
      nextToken?: string | null,
    } | null,
    bookings?:  {
      __typename: "ModelBookingConnection",
      nextToken?: string | null,
    } | null,
    reviews?:  {
      __typename: "ModelReviewConnection",
      nextToken?: string | null,
    } | null,
    bookmarks?:  {
      __typename: "ModelBookmarkedRentalConnection",
      nextToken?: string | null,
    } | null,
    phone?: string | null,
    isPhoneVerified?: boolean | null,
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
    datePublished: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      dateJoined: string,
      phone?: string | null,
      isPhoneVerified?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    rental?:  {
      __typename: "Rental",
      id: string,
      title: string,
      description: string,
      isAvailable?: boolean | null,
      rating?: number | null,
      userID: string,
      category: number,
      latitude: number,
      longitude: number,
      isFirmOnPrice: boolean,
      amountHourly?: number | null,
      amountWeekly?: number | null,
      amountDaily?: number | null,
      allowedStartDates?: Array< string | null > | null,
      allowedEndDates?: Array< string | null > | null,
      bookingStartDates?: Array< string | null > | null,
      bookingEndDates?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
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
    datePublished: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      dateJoined: string,
      phone?: string | null,
      isPhoneVerified?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    rental?:  {
      __typename: "Rental",
      id: string,
      title: string,
      description: string,
      isAvailable?: boolean | null,
      rating?: number | null,
      userID: string,
      category: number,
      latitude: number,
      longitude: number,
      isFirmOnPrice: boolean,
      amountHourly?: number | null,
      amountWeekly?: number | null,
      amountDaily?: number | null,
      allowedStartDates?: Array< string | null > | null,
      allowedEndDates?: Array< string | null > | null,
      bookingStartDates?: Array< string | null > | null,
      bookingEndDates?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
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
    datePublished: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      dateJoined: string,
      phone?: string | null,
      isPhoneVerified?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    rental?:  {
      __typename: "Rental",
      id: string,
      title: string,
      description: string,
      isAvailable?: boolean | null,
      rating?: number | null,
      userID: string,
      category: number,
      latitude: number,
      longitude: number,
      isFirmOnPrice: boolean,
      amountHourly?: number | null,
      amountWeekly?: number | null,
      amountDaily?: number | null,
      allowedStartDates?: Array< string | null > | null,
      allowedEndDates?: Array< string | null > | null,
      bookingStartDates?: Array< string | null > | null,
      bookingEndDates?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
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
      phone?: string | null,
      isPhoneVerified?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    category: number,
    latitude: number,
    longitude: number,
    isFirmOnPrice: boolean,
    amountHourly?: number | null,
    amountWeekly?: number | null,
    amountDaily?: number | null,
    allowedStartDates?: Array< string | null > | null,
    allowedEndDates?: Array< string | null > | null,
    bookingStartDates?: Array< string | null > | null,
    bookingEndDates?: Array< string | null > | null,
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
      phone?: string | null,
      isPhoneVerified?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    category: number,
    latitude: number,
    longitude: number,
    isFirmOnPrice: boolean,
    amountHourly?: number | null,
    amountWeekly?: number | null,
    amountDaily?: number | null,
    allowedStartDates?: Array< string | null > | null,
    allowedEndDates?: Array< string | null > | null,
    bookingStartDates?: Array< string | null > | null,
    bookingEndDates?: Array< string | null > | null,
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
      phone?: string | null,
      isPhoneVerified?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    category: number,
    latitude: number,
    longitude: number,
    isFirmOnPrice: boolean,
    amountHourly?: number | null,
    amountWeekly?: number | null,
    amountDaily?: number | null,
    allowedStartDates?: Array< string | null > | null,
    allowedEndDates?: Array< string | null > | null,
    bookingStartDates?: Array< string | null > | null,
    bookingEndDates?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetBookmarkedRentalQueryVariables = {
  id: string,
};

export type GetBookmarkedRentalQuery = {
  getBookmarkedRental?:  {
    __typename: "BookmarkedRental",
    id: string,
    rental?:  {
      __typename: "Rental",
      id: string,
      title: string,
      description: string,
      isAvailable?: boolean | null,
      rating?: number | null,
      userID: string,
      category: number,
      latitude: number,
      longitude: number,
      isFirmOnPrice: boolean,
      amountHourly?: number | null,
      amountWeekly?: number | null,
      amountDaily?: number | null,
      allowedStartDates?: Array< string | null > | null,
      allowedEndDates?: Array< string | null > | null,
      bookingStartDates?: Array< string | null > | null,
      bookingEndDates?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
    bookmarkedRentalRentalId?: string | null,
  } | null,
};

export type ListBookmarkedRentalsQueryVariables = {
  filter?: ModelBookmarkedRentalFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBookmarkedRentalsQuery = {
  listBookmarkedRentals?:  {
    __typename: "ModelBookmarkedRentalConnection",
    items:  Array< {
      __typename: "BookmarkedRental",
      id: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
      bookmarkedRentalRentalId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type BookmarkedRentalsByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBookmarkedRentalFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BookmarkedRentalsByUserIDQuery = {
  bookmarkedRentalsByUserID?:  {
    __typename: "ModelBookmarkedRentalConnection",
    items:  Array< {
      __typename: "BookmarkedRental",
      id: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
      bookmarkedRentalRentalId?: string | null,
    } | null >,
    nextToken?: string | null,
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
    rentalID: string,
    userID: string,
    rental?:  {
      __typename: "Rental",
      id: string,
      title: string,
      description: string,
      isAvailable?: boolean | null,
      rating?: number | null,
      userID: string,
      category: number,
      latitude: number,
      longitude: number,
      isFirmOnPrice: boolean,
      amountHourly?: number | null,
      amountWeekly?: number | null,
      amountDaily?: number | null,
      allowedStartDates?: Array< string | null > | null,
      allowedEndDates?: Array< string | null > | null,
      bookingStartDates?: Array< string | null > | null,
      bookingEndDates?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    isAccepted: boolean,
    createdAt: string,
    updatedAt: string,
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
      userID: string,
      isAccepted: boolean,
      createdAt: string,
      updatedAt: string,
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
      userID: string,
      isAccepted: boolean,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type BookingsByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBookingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BookingsByUserIDQuery = {
  bookingsByUserID?:  {
    __typename: "ModelBookingConnection",
    items:  Array< {
      __typename: "Booking",
      id: string,
      startDate: string,
      endDate: string,
      rentalID: string,
      userID: string,
      isAccepted: boolean,
      createdAt: string,
      updatedAt: string,
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
    postedRentals?:  {
      __typename: "ModelRentalConnection",
      nextToken?: string | null,
    } | null,
    bookings?:  {
      __typename: "ModelBookingConnection",
      nextToken?: string | null,
    } | null,
    reviews?:  {
      __typename: "ModelReviewConnection",
      nextToken?: string | null,
    } | null,
    bookmarks?:  {
      __typename: "ModelBookmarkedRentalConnection",
      nextToken?: string | null,
    } | null,
    phone?: string | null,
    isPhoneVerified?: boolean | null,
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
      phone?: string | null,
      isPhoneVerified?: boolean | null,
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
    datePublished: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      dateJoined: string,
      phone?: string | null,
      isPhoneVerified?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    rental?:  {
      __typename: "Rental",
      id: string,
      title: string,
      description: string,
      isAvailable?: boolean | null,
      rating?: number | null,
      userID: string,
      category: number,
      latitude: number,
      longitude: number,
      isFirmOnPrice: boolean,
      amountHourly?: number | null,
      amountWeekly?: number | null,
      amountDaily?: number | null,
      allowedStartDates?: Array< string | null > | null,
      allowedEndDates?: Array< string | null > | null,
      bookingStartDates?: Array< string | null > | null,
      bookingEndDates?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
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
      userID: string,
      createdAt: string,
      updatedAt: string,
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
      userID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ReviewsByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelReviewFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ReviewsByUserIDQuery = {
  reviewsByUserID?:  {
    __typename: "ModelReviewConnection",
    items:  Array< {
      __typename: "Review",
      id: string,
      title: string,
      description: string,
      rating?: number | null,
      rentalID: string,
      datePublished: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
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
      phone?: string | null,
      isPhoneVerified?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    category: number,
    latitude: number,
    longitude: number,
    isFirmOnPrice: boolean,
    amountHourly?: number | null,
    amountWeekly?: number | null,
    amountDaily?: number | null,
    allowedStartDates?: Array< string | null > | null,
    allowedEndDates?: Array< string | null > | null,
    bookingStartDates?: Array< string | null > | null,
    bookingEndDates?: Array< string | null > | null,
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
      latitude: number,
      longitude: number,
      isFirmOnPrice: boolean,
      amountHourly?: number | null,
      amountWeekly?: number | null,
      amountDaily?: number | null,
      allowedStartDates?: Array< string | null > | null,
      allowedEndDates?: Array< string | null > | null,
      bookingStartDates?: Array< string | null > | null,
      bookingEndDates?: Array< string | null > | null,
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
      latitude: number,
      longitude: number,
      isFirmOnPrice: boolean,
      amountHourly?: number | null,
      amountWeekly?: number | null,
      amountDaily?: number | null,
      allowedStartDates?: Array< string | null > | null,
      allowedEndDates?: Array< string | null > | null,
      bookingStartDates?: Array< string | null > | null,
      bookingEndDates?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateBookmarkedRentalSubscriptionVariables = {
  filter?: ModelSubscriptionBookmarkedRentalFilterInput | null,
};

export type OnCreateBookmarkedRentalSubscription = {
  onCreateBookmarkedRental?:  {
    __typename: "BookmarkedRental",
    id: string,
    rental?:  {
      __typename: "Rental",
      id: string,
      title: string,
      description: string,
      isAvailable?: boolean | null,
      rating?: number | null,
      userID: string,
      category: number,
      latitude: number,
      longitude: number,
      isFirmOnPrice: boolean,
      amountHourly?: number | null,
      amountWeekly?: number | null,
      amountDaily?: number | null,
      allowedStartDates?: Array< string | null > | null,
      allowedEndDates?: Array< string | null > | null,
      bookingStartDates?: Array< string | null > | null,
      bookingEndDates?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
    bookmarkedRentalRentalId?: string | null,
  } | null,
};

export type OnUpdateBookmarkedRentalSubscriptionVariables = {
  filter?: ModelSubscriptionBookmarkedRentalFilterInput | null,
};

export type OnUpdateBookmarkedRentalSubscription = {
  onUpdateBookmarkedRental?:  {
    __typename: "BookmarkedRental",
    id: string,
    rental?:  {
      __typename: "Rental",
      id: string,
      title: string,
      description: string,
      isAvailable?: boolean | null,
      rating?: number | null,
      userID: string,
      category: number,
      latitude: number,
      longitude: number,
      isFirmOnPrice: boolean,
      amountHourly?: number | null,
      amountWeekly?: number | null,
      amountDaily?: number | null,
      allowedStartDates?: Array< string | null > | null,
      allowedEndDates?: Array< string | null > | null,
      bookingStartDates?: Array< string | null > | null,
      bookingEndDates?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
    bookmarkedRentalRentalId?: string | null,
  } | null,
};

export type OnDeleteBookmarkedRentalSubscriptionVariables = {
  filter?: ModelSubscriptionBookmarkedRentalFilterInput | null,
};

export type OnDeleteBookmarkedRentalSubscription = {
  onDeleteBookmarkedRental?:  {
    __typename: "BookmarkedRental",
    id: string,
    rental?:  {
      __typename: "Rental",
      id: string,
      title: string,
      description: string,
      isAvailable?: boolean | null,
      rating?: number | null,
      userID: string,
      category: number,
      latitude: number,
      longitude: number,
      isFirmOnPrice: boolean,
      amountHourly?: number | null,
      amountWeekly?: number | null,
      amountDaily?: number | null,
      allowedStartDates?: Array< string | null > | null,
      allowedEndDates?: Array< string | null > | null,
      bookingStartDates?: Array< string | null > | null,
      bookingEndDates?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
    bookmarkedRentalRentalId?: string | null,
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
    rentalID: string,
    userID: string,
    rental?:  {
      __typename: "Rental",
      id: string,
      title: string,
      description: string,
      isAvailable?: boolean | null,
      rating?: number | null,
      userID: string,
      category: number,
      latitude: number,
      longitude: number,
      isFirmOnPrice: boolean,
      amountHourly?: number | null,
      amountWeekly?: number | null,
      amountDaily?: number | null,
      allowedStartDates?: Array< string | null > | null,
      allowedEndDates?: Array< string | null > | null,
      bookingStartDates?: Array< string | null > | null,
      bookingEndDates?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    isAccepted: boolean,
    createdAt: string,
    updatedAt: string,
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
    rentalID: string,
    userID: string,
    rental?:  {
      __typename: "Rental",
      id: string,
      title: string,
      description: string,
      isAvailable?: boolean | null,
      rating?: number | null,
      userID: string,
      category: number,
      latitude: number,
      longitude: number,
      isFirmOnPrice: boolean,
      amountHourly?: number | null,
      amountWeekly?: number | null,
      amountDaily?: number | null,
      allowedStartDates?: Array< string | null > | null,
      allowedEndDates?: Array< string | null > | null,
      bookingStartDates?: Array< string | null > | null,
      bookingEndDates?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    isAccepted: boolean,
    createdAt: string,
    updatedAt: string,
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
    rentalID: string,
    userID: string,
    rental?:  {
      __typename: "Rental",
      id: string,
      title: string,
      description: string,
      isAvailable?: boolean | null,
      rating?: number | null,
      userID: string,
      category: number,
      latitude: number,
      longitude: number,
      isFirmOnPrice: boolean,
      amountHourly?: number | null,
      amountWeekly?: number | null,
      amountDaily?: number | null,
      allowedStartDates?: Array< string | null > | null,
      allowedEndDates?: Array< string | null > | null,
      bookingStartDates?: Array< string | null > | null,
      bookingEndDates?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    isAccepted: boolean,
    createdAt: string,
    updatedAt: string,
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
    postedRentals?:  {
      __typename: "ModelRentalConnection",
      nextToken?: string | null,
    } | null,
    bookings?:  {
      __typename: "ModelBookingConnection",
      nextToken?: string | null,
    } | null,
    reviews?:  {
      __typename: "ModelReviewConnection",
      nextToken?: string | null,
    } | null,
    bookmarks?:  {
      __typename: "ModelBookmarkedRentalConnection",
      nextToken?: string | null,
    } | null,
    phone?: string | null,
    isPhoneVerified?: boolean | null,
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
    postedRentals?:  {
      __typename: "ModelRentalConnection",
      nextToken?: string | null,
    } | null,
    bookings?:  {
      __typename: "ModelBookingConnection",
      nextToken?: string | null,
    } | null,
    reviews?:  {
      __typename: "ModelReviewConnection",
      nextToken?: string | null,
    } | null,
    bookmarks?:  {
      __typename: "ModelBookmarkedRentalConnection",
      nextToken?: string | null,
    } | null,
    phone?: string | null,
    isPhoneVerified?: boolean | null,
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
    postedRentals?:  {
      __typename: "ModelRentalConnection",
      nextToken?: string | null,
    } | null,
    bookings?:  {
      __typename: "ModelBookingConnection",
      nextToken?: string | null,
    } | null,
    reviews?:  {
      __typename: "ModelReviewConnection",
      nextToken?: string | null,
    } | null,
    bookmarks?:  {
      __typename: "ModelBookmarkedRentalConnection",
      nextToken?: string | null,
    } | null,
    phone?: string | null,
    isPhoneVerified?: boolean | null,
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
    datePublished: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      dateJoined: string,
      phone?: string | null,
      isPhoneVerified?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    rental?:  {
      __typename: "Rental",
      id: string,
      title: string,
      description: string,
      isAvailable?: boolean | null,
      rating?: number | null,
      userID: string,
      category: number,
      latitude: number,
      longitude: number,
      isFirmOnPrice: boolean,
      amountHourly?: number | null,
      amountWeekly?: number | null,
      amountDaily?: number | null,
      allowedStartDates?: Array< string | null > | null,
      allowedEndDates?: Array< string | null > | null,
      bookingStartDates?: Array< string | null > | null,
      bookingEndDates?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
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
    datePublished: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      dateJoined: string,
      phone?: string | null,
      isPhoneVerified?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    rental?:  {
      __typename: "Rental",
      id: string,
      title: string,
      description: string,
      isAvailable?: boolean | null,
      rating?: number | null,
      userID: string,
      category: number,
      latitude: number,
      longitude: number,
      isFirmOnPrice: boolean,
      amountHourly?: number | null,
      amountWeekly?: number | null,
      amountDaily?: number | null,
      allowedStartDates?: Array< string | null > | null,
      allowedEndDates?: Array< string | null > | null,
      bookingStartDates?: Array< string | null > | null,
      bookingEndDates?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
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
    datePublished: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      dateJoined: string,
      phone?: string | null,
      isPhoneVerified?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    rental?:  {
      __typename: "Rental",
      id: string,
      title: string,
      description: string,
      isAvailable?: boolean | null,
      rating?: number | null,
      userID: string,
      category: number,
      latitude: number,
      longitude: number,
      isFirmOnPrice: boolean,
      amountHourly?: number | null,
      amountWeekly?: number | null,
      amountDaily?: number | null,
      allowedStartDates?: Array< string | null > | null,
      allowedEndDates?: Array< string | null > | null,
      bookingStartDates?: Array< string | null > | null,
      bookingEndDates?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
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
      phone?: string | null,
      isPhoneVerified?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    category: number,
    latitude: number,
    longitude: number,
    isFirmOnPrice: boolean,
    amountHourly?: number | null,
    amountWeekly?: number | null,
    amountDaily?: number | null,
    allowedStartDates?: Array< string | null > | null,
    allowedEndDates?: Array< string | null > | null,
    bookingStartDates?: Array< string | null > | null,
    bookingEndDates?: Array< string | null > | null,
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
      phone?: string | null,
      isPhoneVerified?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    category: number,
    latitude: number,
    longitude: number,
    isFirmOnPrice: boolean,
    amountHourly?: number | null,
    amountWeekly?: number | null,
    amountDaily?: number | null,
    allowedStartDates?: Array< string | null > | null,
    allowedEndDates?: Array< string | null > | null,
    bookingStartDates?: Array< string | null > | null,
    bookingEndDates?: Array< string | null > | null,
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
      phone?: string | null,
      isPhoneVerified?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    category: number,
    latitude: number,
    longitude: number,
    isFirmOnPrice: boolean,
    amountHourly?: number | null,
    amountWeekly?: number | null,
    amountDaily?: number | null,
    allowedStartDates?: Array< string | null > | null,
    allowedEndDates?: Array< string | null > | null,
    bookingStartDates?: Array< string | null > | null,
    bookingEndDates?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
