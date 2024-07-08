import {signUp} from 'aws-amplify/auth';
import {generateClient} from 'aws-amplify/api';
import Util from '../../Util';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import {createUser} from '../../src/graphql/mutations';
import {CreateUserInput} from '../../src/API';

export default class FinishSigningUpService {
  async signUp(
    emailText: string,
    passwordText: string,
    firstNameText: string,
    lastNameText: string,
    birthdate: Date,
    setIsLoading: any,
  ) {
    const client = generateClient();

    try {
      setIsLoading(true);
      await signUp({
        username: emailText,
        password: passwordText,
        options: {
          userAttributes: {
            email: emailText,
            name: firstNameText + ' ' + lastNameText,
            birthdate: Util.toISODateString(birthdate),
          },
          autoSignIn: true,
        },
      })
        .then(async () => {
          await client
            .graphql({
              query: createUser,
              variables: {
                input: {
                  id: emailText,
                  name: firstNameText + ' ' + lastNameText,
                } as CreateUserInput,
              },
            })
            .then(() => {
              ReactNativeHapticFeedback.trigger(
                'notificationSuccess',
                Util.options,
              );
            });
        })
        .finally(() => {
          setIsLoading(false);
        });
    } catch (e) {
      console.error(e);
      throw e;
    }
  }
}
