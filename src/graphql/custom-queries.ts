import * as APITypes from '../API';
import * as CustomAPITypes from '../custom-API';

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
      description
      isAvailable
      rating
      userID
      category
      createdAt
      updatedAt
      prices {
        amount
        timeIncrement
        isFirmOnPrice
        __typename
      }
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

export const listBookmarkedRentalsWithDetails =
  /* GraphQL */ `query ListBookmarkedRentalsWithDetails(
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
      rental {
        address {
          city
          country
          state
          street2
          zip
          street
        }
        location {
          latitude
          longitude
        }
        category
        id
        isAvailable
        prices {
          amount
          isFirmOnPrice
          timeIncrement
        }
        rating
        title
        userID
      }
    }
  }
}
` as GeneratedQuery<
    APITypes.ListBookmarkedRentalsQueryVariables,
    CustomAPITypes.ListBookmarkedRentalsWithDetailsQuery
  >;
