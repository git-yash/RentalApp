import Util from '../../Util';
import {signUp} from 'aws-amplify/auth';
import {generateClient} from 'aws-amplify/api';
import {createUser} from '../../src/graphql/mutations';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

export default class FinishSigningUpService {
  async signUp(
    emailText: string,
    passwordText: string,
    firstNameText: string,
    lastNameText: string,
    birthdate: Date,
    setCanHideModal: any,
    setIsModalVisible: any,
    setIsLoading: any,
    setEmailError: any,
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
        },
      })
        .then(async () => {
          await client
            .graphql({
              query: createUser,
              variables: {
                input: {
                  id: emailText,
                  isOnline: true,
                  dateJoined: Util.toISODateString(),
                },
              },
            })
            .then(() => {
              setCanHideModal(true);
              setIsModalVisible(false);
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
      setEmailError(e);
    }
  }
}
