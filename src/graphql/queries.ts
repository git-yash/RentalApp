/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getBookmarkedRental = /* GraphQL */ `query GetBookmarkedRental($id: ID!) {
  getBookmarkedRental(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetBookmarkedRentalQueryVariables,
  APITypes.GetBookmarkedRentalQuery
>;
export const listBookmarkedRentals = /* GraphQL */ `query ListBookmarkedRentals(
  $filter: ModelBookmarkedRentalFilterInput
  $limit: Int
  $nextToken: String
) {
  listBookmarkedRentals(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userID
      createdAt
      updatedAt
      bookmarkedRentalRentalId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBookmarkedRentalsQueryVariables,
  APITypes.ListBookmarkedRentalsQuery
>;
export const bookmarkedRentalsByUserID = /* GraphQL */ `query BookmarkedRentalsByUserID(
  $userID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelBookmarkedRentalFilterInput
  $limit: Int
  $nextToken: String
) {
  bookmarkedRentalsByUserID(
    userID: $userID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userID
      createdAt
      updatedAt
      bookmarkedRentalRentalId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.BookmarkedRentalsByUserIDQueryVariables,
  APITypes.BookmarkedRentalsByUserIDQuery
>;
export const getBooking = /* GraphQL */ `query GetBooking($id: ID!) {
  getBooking(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetBookingQueryVariables,
  APITypes.GetBookingQuery
>;
export const listBookings = /* GraphQL */ `query ListBookings(
  $filter: ModelBookingFilterInput
  $limit: Int
  $nextToken: String
) {
  listBookings(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      startDate
      endDate
      rentalID
      userID
      isAccepted
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBookingsQueryVariables,
  APITypes.ListBookingsQuery
>;
export const bookingsByRentalID = /* GraphQL */ `query BookingsByRentalID(
  $rentalID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelBookingFilterInput
  $limit: Int
  $nextToken: String
) {
  bookingsByRentalID(
    rentalID: $rentalID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      startDate
      endDate
      rentalID
      userID
      isAccepted
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.BookingsByRentalIDQueryVariables,
  APITypes.BookingsByRentalIDQuery
>;
export const bookingsByUserID = /* GraphQL */ `query BookingsByUserID(
  $userID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelBookingFilterInput
  $limit: Int
  $nextToken: String
) {
  bookingsByUserID(
    userID: $userID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      startDate
      endDate
      rentalID
      userID
      isAccepted
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.BookingsByUserIDQueryVariables,
  APITypes.BookingsByUserIDQuery
>;
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
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
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      dateJoined
      phone
      isPhoneVerified
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const getReview = /* GraphQL */ `query GetReview($id: ID!) {
  getReview(id: $id) {
    id
    title
    description
    rating
    rentalID
    datePublished
    userID
    user {
      id
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
` as GeneratedQuery<APITypes.GetReviewQueryVariables, APITypes.GetReviewQuery>;
export const listReviews = /* GraphQL */ `query ListReviews(
  $filter: ModelReviewFilterInput
  $limit: Int
  $nextToken: String
) {
  listReviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      rating
      rentalID
      datePublished
      userID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListReviewsQueryVariables,
  APITypes.ListReviewsQuery
>;
export const reviewsByRentalID = /* GraphQL */ `query ReviewsByRentalID(
  $rentalID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelReviewFilterInput
  $limit: Int
  $nextToken: String
) {
  reviewsByRentalID(
    rentalID: $rentalID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      title
      description
      rating
      rentalID
      datePublished
      userID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ReviewsByRentalIDQueryVariables,
  APITypes.ReviewsByRentalIDQuery
>;
export const reviewsByUserID = /* GraphQL */ `query ReviewsByUserID(
  $userID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelReviewFilterInput
  $limit: Int
  $nextToken: String
) {
  reviewsByUserID(
    userID: $userID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      title
      description
      rating
      rentalID
      datePublished
      userID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ReviewsByUserIDQueryVariables,
  APITypes.ReviewsByUserIDQuery
>;
export const getRental = /* GraphQL */ `query GetRental($id: ID!) {
  getRental(id: $id) {
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
` as GeneratedQuery<APITypes.GetRentalQueryVariables, APITypes.GetRentalQuery>;
export const listRentals = /* GraphQL */ `query ListRentals(
  $filter: ModelRentalFilterInput
  $limit: Int
  $nextToken: String
) {
  listRentals(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRentalsQueryVariables,
  APITypes.ListRentalsQuery
>;
export const rentalsByIsAvailable = /* GraphQL */ `query RentalsByIsAvailable(
  $isAvailable: Int!
  $sortDirection: ModelSortDirection
  $filter: ModelRentalFilterInput
  $limit: Int
  $nextToken: String
) {
  rentalsByIsAvailable(
    isAvailable: $isAvailable
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.RentalsByIsAvailableQueryVariables,
  APITypes.RentalsByIsAvailableQuery
>;
export const rentalsByUserID = /* GraphQL */ `query RentalsByUserID(
  $userID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelRentalFilterInput
  $limit: Int
  $nextToken: String
) {
  rentalsByUserID(
    userID: $userID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.RentalsByUserIDQueryVariables,
  APITypes.RentalsByUserIDQuery
>;
export const rentalsByCategoryName = /* GraphQL */ `query RentalsByCategoryName(
  $categoryName: String!
  $sortDirection: ModelSortDirection
  $filter: ModelRentalFilterInput
  $limit: Int
  $nextToken: String
) {
  rentalsByCategoryName(
    categoryName: $categoryName
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.RentalsByCategoryNameQueryVariables,
  APITypes.RentalsByCategoryNameQuery
>;
export const rentalsByAvailabilityCategoryIndex = /* GraphQL */ `query RentalsByAvailabilityCategoryIndex(
  $availabilityCategoryIndex: String!
  $sortDirection: ModelSortDirection
  $filter: ModelRentalFilterInput
  $limit: Int
  $nextToken: String
) {
  rentalsByAvailabilityCategoryIndex(
    availabilityCategoryIndex: $availabilityCategoryIndex
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.RentalsByAvailabilityCategoryIndexQueryVariables,
  APITypes.RentalsByAvailabilityCategoryIndexQuery
>;
