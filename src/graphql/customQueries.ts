import * as APITypes from '../API';

type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const listRentalsWithAllDetails = /* GraphQL */ `query ListRentals(
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
      createdAt
      updatedAt
      __typename
    }
    category
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
