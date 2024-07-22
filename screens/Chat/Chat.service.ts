import {AbstractAPIService} from '../../services/AbstractAPI.service';
import {messagesByChat} from '../../src/graphql/queries';
import {
  CreateMessageInput,
  CreateMessageMutationVariables,
  MessagesByChatQueryVariables,
  ModelSortDirection,
  UpdateChatInput,
  UpdateChatMutationVariables,
} from '../../src/API';
import {createMessage, updateChat} from '../../src/graphql/mutations';
import {onMessageByChatIDForChatScreen} from '../../src/graphql/custom-subscriptions';

export default class ChatService extends AbstractAPIService {
  async getMessages(chatID: string, nextToken?: string | null) {
    return await this.client
      .graphql({
        query: messagesByChat,
        variables: {
          chatID,
          limit: 20,
          nextToken,
          sortDirection: ModelSortDirection.DESC,
        } as MessagesByChatQueryVariables,
      })
      .then(response => {
        return response.data.messagesByChat;
      })
      .catch((e: Error) => {
        throw this.logError(e, e.message, 'messagesByChat');
      });
  }

  async sendMessage(chatID: string, messageText: string, userID: string) {
    return await this.client
      .graphql({
        query: createMessage,
        variables: {
          input: {
            chatID,
            content: messageText,
            sentAt: new Date().toISOString(),
            read: false,
            userID,
          } as CreateMessageInput,
        } as CreateMessageMutationVariables,
      })
      .then(async response => {
        await this.updateLastMessage(chatID, response.data.createMessage.id);
        return response.data.createMessage;
      })
      .catch((e: Error) => {
        throw this.logError(e, e.message, 'createMessage');
      });
  }

  async updateLastMessage(chatID: string, chatLastMessageId: string) {
    return await this.client
      .graphql({
        query: updateChat,
        variables: {
          input: {id: chatID, chatLastMessageId} as UpdateChatInput,
        } as UpdateChatMutationVariables,
      })
      .then(response => {
        return response.data.updateChat;
      })
      .catch((e: Error) => {
        throw this.logError(e, e.message, 'updateChat');
      });
  }

  async messageSubscription(chatID: string) {
    return this.client.graphql({
      query: onMessageByChatIDForChatScreen,
      variables: {chatID},
    });
  }
}
