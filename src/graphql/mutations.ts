/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createBookmarkedRental = /* GraphQL */ `mutation CreateBookmarkedRental(
  $input: CreateBookmarkedRentalInput!
  $condition: ModelBookmarkedRentalConditionInput
) {
  createBookmarkedRental(input: $input, condition: $condition) {
    id
    rental {
      id
      title
      description
      isAvailable
      userID
      categoryName
      availabilityCategoryIndex
      amountHourly
      amountDaily
      amountWeekly
      latitude
      longitude
      bookingStartDates
      bookingEndDates
      numberOfTimesRented
      numberOfReviews
      averageRating
      numberOfFiveStarRatings
      numberOfFourStarRatings
      numberOfThreeStarRatings
      numberOfTwoStarRatings
      numberOfOneStarRatings
      numberOfRatings
      createdAt
      updatedAt
      __typename
    }
    userID
    createdAt
    updatedAt
    bookmarkedRentalRentalId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateBookmarkedRentalMutationVariables,
  APITypes.CreateBookmarkedRentalMutation
>;
export const updateBookmarkedRental = /* GraphQL */ `mutation UpdateBookmarkedRental(
  $input: UpdateBookmarkedRentalInput!
  $condition: ModelBookmarkedRentalConditionInput
) {
  updateBookmarkedRental(input: $input, condition: $condition) {
    id
    rental {
      id
      title
      description
      isAvailable
      userID
      categoryName
      availabilityCategoryIndex
      amountHourly
      amountDaily
      amountWeekly
      latitude
      longitude
      bookingStartDates
      bookingEndDates
      numberOfTimesRented
      numberOfReviews
      averageRating
      numberOfFiveStarRatings
      numberOfFourStarRatings
      numberOfThreeStarRatings
      numberOfTwoStarRatings
      numberOfOneStarRatings
      numberOfRatings
      createdAt
      updatedAt
      __typename
    }
    userID
    createdAt
    updatedAt
    bookmarkedRentalRentalId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateBookmarkedRentalMutationVariables,
  APITypes.UpdateBookmarkedRentalMutation
>;
export const deleteBookmarkedRental = /* GraphQL */ `mutation DeleteBookmarkedRental(
  $input: DeleteBookmarkedRentalInput!
  $condition: ModelBookmarkedRentalConditionInput
) {
  deleteBookmarkedRental(input: $input, condition: $condition) {
    id
    rental {
      id
      title
      description
      isAvailable
      userID
      categoryName
      availabilityCategoryIndex
      amountHourly
      amountDaily
      amountWeekly
      latitude
      longitude
      bookingStartDates
      bookingEndDates
      numberOfTimesRented
      numberOfReviews
      averageRating
      numberOfFiveStarRatings
      numberOfFourStarRatings
      numberOfThreeStarRatings
      numberOfTwoStarRatings
      numberOfOneStarRatings
      numberOfRatings
      createdAt
      updatedAt
      __typename
    }
    userID
    createdAt
    updatedAt
    bookmarkedRentalRentalId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteBookmarkedRentalMutationVariables,
  APITypes.DeleteBookmarkedRentalMutation
>;
export const createBooking = /* GraphQL */ `mutation CreateBooking(
  $input: CreateBookingInput!
  $condition: ModelBookingConditionInput
) {
  createBooking(input: $input, condition: $condition) {
    id
    startDate
    endDate
    rentalID
    userID
    rental {
      id
      title
      description
      isAvailable
      userID
      categoryName
      availabilityCategoryIndex
      amountHourly
      amountDaily
      amountWeekly
      latitude
      longitude
      bookingStartDates
      bookingEndDates
      numberOfTimesRented
      numberOfReviews
      averageRating
      numberOfFiveStarRatings
      numberOfFourStarRatings
      numberOfThreeStarRatings
      numberOfTwoStarRatings
      numberOfOneStarRatings
      numberOfRatings
      createdAt
      updatedAt
      __typename
    }
    isAccepted
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateBookingMutationVariables,
  APITypes.CreateBookingMutation
>;
export const updateBooking = /* GraphQL */ `mutation UpdateBooking(
  $input: UpdateBookingInput!
  $condition: ModelBookingConditionInput
) {
  updateBooking(input: $input, condition: $condition) {
    id
    startDate
    endDate
    rentalID
    userID
    rental {
      id
      title
      description
      isAvailable
      userID
      categoryName
      availabilityCategoryIndex
      amountHourly
      amountDaily
      amountWeekly
      latitude
      longitude
      bookingStartDates
      bookingEndDates
      numberOfTimesRented
      numberOfReviews
      averageRating
      numberOfFiveStarRatings
      numberOfFourStarRatings
      numberOfThreeStarRatings
      numberOfTwoStarRatings
      numberOfOneStarRatings
      numberOfRatings
      createdAt
      updatedAt
      __typename
    }
    isAccepted
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateBookingMutationVariables,
  APITypes.UpdateBookingMutation
>;
export const deleteBooking = /* GraphQL */ `mutation DeleteBooking(
  $input: DeleteBookingInput!
  $condition: ModelBookingConditionInput
) {
  deleteBooking(input: $input, condition: $condition) {
    id
    startDate
    endDate
    rentalID
    userID
    rental {
      id
      title
      description
      isAvailable
      userID
      categoryName
      availabilityCategoryIndex
      amountHourly
      amountDaily
      amountWeekly
      latitude
      longitude
      bookingStartDates
      bookingEndDates
      numberOfTimesRented
      numberOfReviews
      averageRating
      numberOfFiveStarRatings
      numberOfFourStarRatings
      numberOfThreeStarRatings
      numberOfTwoStarRatings
      numberOfOneStarRatings
      numberOfRatings
      createdAt
      updatedAt
      __typename
    }
    isAccepted
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteBookingMutationVariables,
  APITypes.DeleteBookingMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
    id
    name
    dateJoined
    postedRentals {
      nextToken
      __typename
    }
    bookings {
      nextToken
      __typename
    }
    reviews {
      nextToken
      __typename
    }
    bookmarks {
      nextToken
      __typename
    }
    phone
    isPhoneVerified
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
    id
    name
    dateJoined
    postedRentals {
      nextToken
      __typename
    }
    bookings {
      nextToken
      __typename
    }
    reviews {
      nextToken
      __typename
    }
    bookmarks {
      nextToken
      __typename
    }
    phone
    isPhoneVerified
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
    id
    name
    dateJoined
    postedRentals {
      nextToken
      __typename
    }
    bookings {
      nextToken
      __typename
    }
    reviews {
      nextToken
      __typename
    }
    bookmarks {
      nextToken
      __typename
    }
    phone
    isPhoneVerified
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createReview = /* GraphQL */ `mutation CreateReview(
  $input: CreateReviewInput!
  $condition: ModelReviewConditionInput
) {
  createReview(input: $input, condition: $condition) {
    id
    title
    description
    rating
    rentalID
    datePublished
    userID
    user {
      id
      name
      dateJoined
      phone
      isPhoneVerified
      createdAt
      updatedAt
      __typename
    }
    rental {
      id
      title
      description
      isAvailable
      userID
      categoryName
      availabilityCategoryIndex
      amountHourly
      amountDaily
      amountWeekly
      latitude
      longitude
      bookingStartDates
      bookingEndDates
      numberOfTimesRented
      numberOfReviews
      averageRating
      numberOfFiveStarRatings
      numberOfFourStarRatings
      numberOfThreeStarRatings
      numberOfTwoStarRatings
      numberOfOneStarRatings
      numberOfRatings
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateReviewMutationVariables,
  APITypes.CreateReviewMutation
>;
export const updateReview = /* GraphQL */ `mutation UpdateReview(
  $input: UpdateReviewInput!
  $condition: ModelReviewConditionInput
) {
  updateReview(input: $input, condition: $condition) {
    id
    title
    description
    rating
    rentalID
    datePublished
    userID
    user {
      id
      name
      dateJoined
      phone
      isPhoneVerified
      createdAt
      updatedAt
      __typename
    }
    rental {
      id
      title
      description
      isAvailable
      userID
      categoryName
      availabilityCategoryIndex
      amountHourly
      amountDaily
      amountWeekly
      latitude
      longitude
      bookingStartDates
      bookingEndDates
      numberOfTimesRented
      numberOfReviews
      averageRating
      numberOfFiveStarRatings
      numberOfFourStarRatings
      numberOfThreeStarRatings
      numberOfTwoStarRatings
      numberOfOneStarRatings
      numberOfRatings
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateReviewMutationVariables,
  APITypes.UpdateReviewMutation
>;
export const deleteReview = /* GraphQL */ `mutation DeleteReview(
  $input: DeleteReviewInput!
  $condition: ModelReviewConditionInput
) {
  deleteReview(input: $input, condition: $condition) {
    id
    title
    description
    rating
    rentalID
    datePublished
    userID
    user {
      id
      name
      dateJoined
      phone
      isPhoneVerified
      createdAt
      updatedAt
      __typename
    }
    rental {
      id
      title
      description
      isAvailable
      userID
      categoryName
      availabilityCategoryIndex
      amountHourly
      amountDaily
      amountWeekly
      latitude
      longitude
      bookingStartDates
      bookingEndDates
      numberOfTimesRented
      numberOfReviews
      averageRating
      numberOfFiveStarRatings
      numberOfFourStarRatings
      numberOfThreeStarRatings
      numberOfTwoStarRatings
      numberOfOneStarRatings
      numberOfRatings
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteReviewMutationVariables,
  APITypes.DeleteReviewMutation
>;
export const createRental = /* GraphQL */ `mutation CreateRental(
  $input: CreateRentalInput!
  $condition: ModelRentalConditionInput
) {
  createRental(input: $input, condition: $condition) {
    id
    title
    description
    isAvailable
    address {
      street
      street2
      city
      state
      zip
      country
      __typename
    }
    reviews {
      nextToken
      __typename
    }
    bookings {
      nextToken
      __typename
    }
    userID
    user {
      id
      name
      dateJoined
      phone
      isPhoneVerified
      createdAt
      updatedAt
      __typename
    }
    categoryName
    availabilityCategoryIndex
    amountHourly
    amountDaily
    amountWeekly
    latitude
    longitude
    bookingStartDates
    bookingEndDates
    numberOfTimesRented
    numberOfReviews
    averageRating
    numberOfFiveStarRatings
    numberOfFourStarRatings
    numberOfThreeStarRatings
    numberOfTwoStarRatings
    numberOfOneStarRatings
    numberOfRatings
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateRentalMutationVariables,
  APITypes.CreateRentalMutation
>;
export const updateRental = /* GraphQL */ `mutation UpdateRental(
  $input: UpdateRentalInput!
  $condition: ModelRentalConditionInput
) {
  updateRental(input: $input, condition: $condition) {
    id
    title
    description
    isAvailable
    address {
      street
      street2
      city
      state
      zip
      country
      __typename
    }
    reviews {
      nextToken
      __typename
    }
    bookings {
      nextToken
      __typename
    }
    userID
    user {
      id
      name
      dateJoined
      phone
      isPhoneVerified
      createdAt
      updatedAt
      __typename
    }
    categoryName
    availabilityCategoryIndex
    amountHourly
    amountDaily
    amountWeekly
    latitude
    longitude
    bookingStartDates
    bookingEndDates
    numberOfTimesRented
    numberOfReviews
    averageRating
    numberOfFiveStarRatings
    numberOfFourStarRatings
    numberOfThreeStarRatings
    numberOfTwoStarRatings
    numberOfOneStarRatings
    numberOfRatings
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateRentalMutationVariables,
  APITypes.UpdateRentalMutation
>;
export const deleteRental = /* GraphQL */ `mutation DeleteRental(
  $input: DeleteRentalInput!
  $condition: ModelRentalConditionInput
) {
  deleteRental(input: $input, condition: $condition) {
    id
    title
    description
    isAvailable
    address {
      street
      street2
      city
      state
      zip
      country
      __typename
    }
    reviews {
      nextToken
      __typename
    }
    bookings {
      nextToken
      __typename
    }
    userID
    user {
      id
      name
      dateJoined
      phone
      isPhoneVerified
      createdAt
      updatedAt
      __typename
    }
    categoryName
    availabilityCategoryIndex
    amountHourly
    amountDaily
    amountWeekly
    latitude
    longitude
    bookingStartDates
    bookingEndDates
    numberOfTimesRented
    numberOfReviews
    averageRating
    numberOfFiveStarRatings
    numberOfFourStarRatings
    numberOfThreeStarRatings
    numberOfTwoStarRatings
    numberOfOneStarRatings
    numberOfRatings
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteRentalMutationVariables,
  APITypes.DeleteRentalMutation
>;
