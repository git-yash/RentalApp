import {AbstractAPIService} from '../../services/AbstractAPI.service';
import {UserChats} from '../../src/API';
import {userChatsWithDetails} from '../../src/graphql/custom-queries';

export default class MessagesService extends AbstractAPIService {
  async getChats(userId: string) {
    return await this.client
      .graphql({
        query: userChatsWithDetails,
        variables: {userId: userId},
      })
      .then(response => {
        return response.data.userChatsByUserId.items as UserChats[];
      })
      .catch((e: Error) => {
        throw this.logError(e, e.message, 'userChatsByUserId');
      });
  }
}
