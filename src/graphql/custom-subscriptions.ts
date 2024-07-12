import * as APITypes from '../API';

type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onMessageByChatIDForChatScreen =
  /* GraphQL */ `subscription OnMessageByChatIDForChatScreen($chatID: ID!) {
  onMessageByChatID(chatID: $chatID) {
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
}
` as GeneratedSubscription<
    APITypes.OnMessageByChatIDSubscriptionVariables,
    APITypes.OnMessageByChatIDSubscription
  >;
