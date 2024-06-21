import * as APITypes from '../API';

type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const listRentalsWithAllDetails =
  /* GraphQL */ `query ListRentalsWithAllDetails(
  $filter: ModelRentalFilterInput
  $limit: Int
  $nextToken: String
) {
  listRentals(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
    id
    title
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
    userID
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
// TODO: remove unused nested queries
