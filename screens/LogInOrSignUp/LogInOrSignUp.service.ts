import {generateClient} from 'aws-amplify/api';
import {getUser} from '../../src/graphql/queries';

export default class LogInOrSignUpService {
  async handleDocumentExists(email: string) {
    const client = generateClient();

    const user = await client.graphql({
      query: getUser,
      variables: {
        id: email,
      },
    });

    return !!user.data.getUser;
  }
}
