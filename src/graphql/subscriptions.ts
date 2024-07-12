/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onMessageByChatID = /* GraphQL */ `subscription OnMessageByChatID($chatID: ID!) {
  onMessageByChatID(chatID: $chatID) {
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
` as GeneratedSubscription<
  APITypes.OnMessageByChatIDSubscriptionVariables,
  APITypes.OnMessageByChatIDSubscription
>;
export const onCreateBookmarkedRental = /* GraphQL */ `subscription OnCreateBookmarkedRental(
  $filter: ModelSubscriptionBookmarkedRentalFilterInput
) {
  onCreateBookmarkedRental(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateBookmarkedRentalSubscriptionVariables,
  APITypes.OnCreateBookmarkedRentalSubscription
>;
export const onUpdateBookmarkedRental = /* GraphQL */ `subscription OnUpdateBookmarkedRental(
  $filter: ModelSubscriptionBookmarkedRentalFilterInput
) {
  onUpdateBookmarkedRental(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateBookmarkedRentalSubscriptionVariables,
  APITypes.OnUpdateBookmarkedRentalSubscription
>;
export const onDeleteBookmarkedRental = /* GraphQL */ `subscription OnDeleteBookmarkedRental(
  $filter: ModelSubscriptionBookmarkedRentalFilterInput
) {
  onDeleteBookmarkedRental(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteBookmarkedRentalSubscriptionVariables,
  APITypes.OnDeleteBookmarkedRentalSubscription
>;
export const onCreateBooking = /* GraphQL */ `subscription OnCreateBooking($filter: ModelSubscriptionBookingFilterInput) {
  onCreateBooking(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateBookingSubscriptionVariables,
  APITypes.OnCreateBookingSubscription
>;
export const onUpdateBooking = /* GraphQL */ `subscription OnUpdateBooking($filter: ModelSubscriptionBookingFilterInput) {
  onUpdateBooking(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateBookingSubscriptionVariables,
  APITypes.OnUpdateBookingSubscription
>;
export const onDeleteBooking = /* GraphQL */ `subscription OnDeleteBooking($filter: ModelSubscriptionBookingFilterInput) {
  onDeleteBooking(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteBookingSubscriptionVariables,
  APITypes.OnDeleteBookingSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteRentalSubscriptionVariables,
  APITypes.OnDeleteRentalSubscription
>;
export const onCreateChat = /* GraphQL */ `subscription OnCreateChat($filter: ModelSubscriptionChatFilterInput) {
  onCreateChat(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateChatSubscriptionVariables,
  APITypes.OnCreateChatSubscription
>;
export const onUpdateChat = /* GraphQL */ `subscription OnUpdateChat($filter: ModelSubscriptionChatFilterInput) {
  onUpdateChat(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateChatSubscriptionVariables,
  APITypes.OnUpdateChatSubscription
>;
export const onDeleteChat = /* GraphQL */ `subscription OnDeleteChat($filter: ModelSubscriptionChatFilterInput) {
  onDeleteChat(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteChatSubscriptionVariables,
  APITypes.OnDeleteChatSubscription
>;
export const onCreateMessage = /* GraphQL */ `subscription OnCreateMessage($filter: ModelSubscriptionMessageFilterInput) {
  onCreateMessage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateMessageSubscriptionVariables,
  APITypes.OnCreateMessageSubscription
>;
export const onUpdateMessage = /* GraphQL */ `subscription OnUpdateMessage($filter: ModelSubscriptionMessageFilterInput) {
  onUpdateMessage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateMessageSubscriptionVariables,
  APITypes.OnUpdateMessageSubscription
>;
export const onDeleteMessage = /* GraphQL */ `subscription OnDeleteMessage($filter: ModelSubscriptionMessageFilterInput) {
  onDeleteMessage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteMessageSubscriptionVariables,
  APITypes.OnDeleteMessageSubscription
>;
export const onCreateUserChats = /* GraphQL */ `subscription OnCreateUserChats($filter: ModelSubscriptionUserChatsFilterInput) {
  onCreateUserChats(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserChatsSubscriptionVariables,
  APITypes.OnCreateUserChatsSubscription
>;
export const onUpdateUserChats = /* GraphQL */ `subscription OnUpdateUserChats($filter: ModelSubscriptionUserChatsFilterInput) {
  onUpdateUserChats(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserChatsSubscriptionVariables,
  APITypes.OnUpdateUserChatsSubscription
>;
export const onDeleteUserChats = /* GraphQL */ `subscription OnDeleteUserChats($filter: ModelSubscriptionUserChatsFilterInput) {
  onDeleteUserChats(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserChatsSubscriptionVariables,
  APITypes.OnDeleteUserChatsSubscription
>;
