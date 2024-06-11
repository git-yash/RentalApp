/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateBooking = /* GraphQL */ `subscription OnCreateBooking($filter: ModelSubscriptionBookingFilterInput) {
  onCreateBooking(filter: $filter) {
    id
    startDate
    endDate
    user {
      id
      dateJoined
      isOnline
      username
      createdAt
      updatedAt
      __typename
    }
    rentalID
    createdAt
    updatedAt
    bookingUserId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateBookingSubscriptionVariables,
  APITypes.OnCreateBookingSubscription
>;
export const onUpdateBooking = /* GraphQL */ `subscription OnUpdateBooking($filter: ModelSubscriptionBookingFilterInput) {
  onUpdateBooking(filter: $filter) {
    id
    startDate
    endDate
    user {
      id
      dateJoined
      isOnline
      username
      createdAt
      updatedAt
      __typename
    }
    rentalID
    createdAt
    updatedAt
    bookingUserId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateBookingSubscriptionVariables,
  APITypes.OnUpdateBookingSubscription
>;
export const onDeleteBooking = /* GraphQL */ `subscription OnDeleteBooking($filter: ModelSubscriptionBookingFilterInput) {
  onDeleteBooking(filter: $filter) {
    id
    startDate
    endDate
    user {
      id
      dateJoined
      isOnline
      username
      createdAt
      updatedAt
      __typename
    }
    rentalID
    createdAt
    updatedAt
    bookingUserId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteBookingSubscriptionVariables,
  APITypes.OnDeleteBookingSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
    id
    dateJoined
    isOnline
    postedRentals {
      nextToken
      __typename
    }
    username
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
    id
    dateJoined
    isOnline
    postedRentals {
      nextToken
      __typename
    }
    username
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
    id
    dateJoined
    isOnline
    postedRentals {
      nextToken
      __typename
    }
    username
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreateReview = /* GraphQL */ `subscription OnCreateReview($filter: ModelSubscriptionReviewFilterInput) {
  onCreateReview(filter: $filter) {
    id
    title
    description
    rating
    rentalID
    user {
      id
      dateJoined
      isOnline
      username
      createdAt
      updatedAt
      __typename
    }
    datePublished
    createdAt
    updatedAt
    reviewUserId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateReviewSubscriptionVariables,
  APITypes.OnCreateReviewSubscription
>;
export const onUpdateReview = /* GraphQL */ `subscription OnUpdateReview($filter: ModelSubscriptionReviewFilterInput) {
  onUpdateReview(filter: $filter) {
    id
    title
    description
    rating
    rentalID
    user {
      id
      dateJoined
      isOnline
      username
      createdAt
      updatedAt
      __typename
    }
    datePublished
    createdAt
    updatedAt
    reviewUserId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateReviewSubscriptionVariables,
  APITypes.OnUpdateReviewSubscription
>;
export const onDeleteReview = /* GraphQL */ `subscription OnDeleteReview($filter: ModelSubscriptionReviewFilterInput) {
  onDeleteReview(filter: $filter) {
    id
    title
    description
    rating
    rentalID
    user {
      id
      dateJoined
      isOnline
      username
      createdAt
      updatedAt
      __typename
    }
    datePublished
    createdAt
    updatedAt
    reviewUserId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteReviewSubscriptionVariables,
  APITypes.OnDeleteReviewSubscription
>;
export const onCreateRental = /* GraphQL */ `subscription OnCreateRental($filter: ModelSubscriptionRentalFilterInput) {
  onCreateRental(filter: $filter) {
    id
    title
    description
    isAvailable
    prices {
      amount
      timeIncrement
      isFirmOnPrice
      __typename
    }
    rating
    address {
      street
      street2
      city
      state
      zip
      country
      __typename
    }
    location {
      latitude
      longitude
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
      dateJoined
      isOnline
      username
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateRentalSubscriptionVariables,
  APITypes.OnCreateRentalSubscription
>;
export const onUpdateRental = /* GraphQL */ `subscription OnUpdateRental($filter: ModelSubscriptionRentalFilterInput) {
  onUpdateRental(filter: $filter) {
    id
    title
    description
    isAvailable
    prices {
      amount
      timeIncrement
      isFirmOnPrice
      __typename
    }
    rating
    address {
      street
      street2
      city
      state
      zip
      country
      __typename
    }
    location {
      latitude
      longitude
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
      dateJoined
      isOnline
      username
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateRentalSubscriptionVariables,
  APITypes.OnUpdateRentalSubscription
>;
export const onDeleteRental = /* GraphQL */ `subscription OnDeleteRental($filter: ModelSubscriptionRentalFilterInput) {
  onDeleteRental(filter: $filter) {
    id
    title
    description
    isAvailable
    prices {
      amount
      timeIncrement
      isFirmOnPrice
      __typename
    }
    rating
    address {
      street
      street2
      city
      state
      zip
      country
      __typename
    }
    location {
      latitude
      longitude
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
      dateJoined
      isOnline
      username
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteRentalSubscriptionVariables,
  APITypes.OnDeleteRentalSubscription
>;
