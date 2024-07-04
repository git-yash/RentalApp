import {getUser} from '../src/graphql/queries';
import {generateClient} from 'aws-amplify/api';
import {User} from '../src/API';

export default class UserService {
  client = generateClient();

  async getUser(loginId: string) {
    return this.client
      .graphql({
        query: getUser,
        variables: {id: loginId},
      })
      .then(response => {
        return response.data.getUser as User;
      })
      .catch(e => {
        console.error('getUser', e);
        throw e;
      });
  }
}
