import * as APITypes from '../API';
import * as CustomAPITypes from '../custom-API';

type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const listBookmarkedRentalsWithDetails =
  /* GraphQL */ `query ListBookmarkedRentalsWithDetails(
  $filter: ModelBookmarkedRentalFilterInput
  $limit: Int
  $nextToken: String
) {
  listBookmarkedRentals(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      userID
      bookmarkedRentalRentalId
      rental {
      id
      title
      averageRating
      userID
      numberOfTimesRented
      numberOfReviews
      amountHourly
      amountDaily
      amountWeekly
     __typename
      }
    }
  }
}
` as GeneratedQuery<
    APITypes.ListBookmarkedRentalsQueryVariables,
    CustomAPITypes.ListBookmarkedRentalsWithDetailsQuery
  >;

export const getRentalWithDetails =
  /* GraphQL */ `query GetRentalWithDetails($id: ID!) {
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
    bookings {
      nextToken
      __typename
    }
    userID
    user {
      id
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
` as GeneratedQuery<
    APITypes.GetRentalQueryVariables,
    APITypes.GetRentalWithDetailsQuery
  >;
export const listRentalsForCard = /* GraphQL */ `query ListRentalsForCard(
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
      averageRating
      userID
      numberOfTimesRented
      numberOfReviews
      amountHourly
      amountDaily
      amountWeekly
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

export const reviewByRentalForRentalDetails =
  /* GraphQL */ `query ReviewByRentalForRentalDetails(
  $rentalID: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelReviewFilterInput
  $limit: Int
  $nextToken: String
) {
  reviewsByRental(
    rentalID: $rentalID
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      title
      description
      rating
      user {
        name
      }
      createdAt
    }
    nextToken
  }
}
` as GeneratedQuery<
    APITypes.ReviewsByRentalQueryVariables,
    APITypes.ReviewsByRentalQuery
  >;
