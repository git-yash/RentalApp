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
      amountMonthly
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
      willDeliver
      willPickUp
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
      amountMonthly
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
      willDeliver
      willPickUp
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
    name
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
    chats {
      nextToken
      __typename
    }
    messages {
      nextToken
      __typename
    }
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
      name
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
    userID
    user {
      id
      name
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
      amountMonthly
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
      willDeliver
      willPickUp
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
export const reviewsByRental = /* GraphQL */ `query ReviewsByRental(
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
      id
      title
      description
      rating
      rentalID
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
  APITypes.ReviewsByRentalQueryVariables,
  APITypes.ReviewsByRentalQuery
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
      name
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
    amountMonthly
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
    willDeliver
    willPickUp
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
      amountMonthly
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
      willDeliver
      willPickUp
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
      amountMonthly
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
      willDeliver
      willPickUp
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
      amountMonthly
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
      willDeliver
      willPickUp
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
      amountMonthly
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
      willDeliver
      willPickUp
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
      amountMonthly
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
      willDeliver
      willPickUp
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
export const getChat = /* GraphQL */ `query GetChat($id: ID!) {
  getChat(id: $id) {
    id
    participants {
      nextToken
      __typename
    }
    messages {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    lastMessage {
      id
      content
      userID
      chatID
      read
      sentAt
      createdAt
      updatedAt
      __typename
    }
    chatLastMessageId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetChatQueryVariables, APITypes.GetChatQuery>;
export const listChats = /* GraphQL */ `query ListChats(
  $filter: ModelChatFilterInput
  $limit: Int
  $nextToken: String
) {
  listChats(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      createdAt
      updatedAt
      chatLastMessageId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListChatsQueryVariables, APITypes.ListChatsQuery>;
export const getMessage = /* GraphQL */ `query GetMessage($id: ID!) {
  getMessage(id: $id) {
    id
    content
    sender {
      id
      name
      phone
      isPhoneVerified
      createdAt
      updatedAt
      __typename
    }
    userID
    chat {
      id
      createdAt
      updatedAt
      chatLastMessageId
      __typename
    }
    chatID
    read
    sentAt
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetMessageQueryVariables,
  APITypes.GetMessageQuery
>;
export const listMessages = /* GraphQL */ `query ListMessages(
  $filter: ModelMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      content
      userID
      chatID
      read
      sentAt
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMessagesQueryVariables,
  APITypes.ListMessagesQuery
>;
export const messagesByUserID = /* GraphQL */ `query MessagesByUserID(
  $userID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  messagesByUserID(
    userID: $userID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      content
      userID
      chatID
      read
      sentAt
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.MessagesByUserIDQueryVariables,
  APITypes.MessagesByUserIDQuery
>;
export const messagesByChat = /* GraphQL */ `query MessagesByChat(
  $chatID: ID!
  $sentAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  messagesByChat(
    chatID: $chatID
    sentAt: $sentAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      content
      userID
      chatID
      read
      sentAt
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.MessagesByChatQueryVariables,
  APITypes.MessagesByChatQuery
>;
export const getUserChats = /* GraphQL */ `query GetUserChats($id: ID!) {
  getUserChats(id: $id) {
    id
    userId
    chatId
    user {
      id
      name
      phone
      isPhoneVerified
      createdAt
      updatedAt
      __typename
    }
    chat {
      id
      createdAt
      updatedAt
      chatLastMessageId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserChatsQueryVariables,
  APITypes.GetUserChatsQuery
>;
export const listUserChats = /* GraphQL */ `query ListUserChats(
  $filter: ModelUserChatsFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserChats(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userId
      chatId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserChatsQueryVariables,
  APITypes.ListUserChatsQuery
>;
export const userChatsByUserId = /* GraphQL */ `query UserChatsByUserId(
  $userId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelUserChatsFilterInput
  $limit: Int
  $nextToken: String
) {
  userChatsByUserId(
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userId
      chatId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.UserChatsByUserIdQueryVariables,
  APITypes.UserChatsByUserIdQuery
>;
export const userChatsByChatId = /* GraphQL */ `query UserChatsByChatId(
  $chatId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelUserChatsFilterInput
  $limit: Int
  $nextToken: String
) {
  userChatsByChatId(
    chatId: $chatId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userId
      chatId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.UserChatsByChatIdQueryVariables,
  APITypes.UserChatsByChatIdQuery
>;
