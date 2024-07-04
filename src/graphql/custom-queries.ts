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
      rating
      userID
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
      userID
      bookmarkedRentalRentalId
      rental {
        isAvailable
        rating
        title
        userID
        amountHourly
        amountDaily
        amountWeekly
      }
    }
  }
}
` as GeneratedQuery<
    APITypes.ListBookmarkedRentalsQueryVariables,
    CustomAPITypes.ListBookmarkedRentalsWithDetailsQuery
  >;
