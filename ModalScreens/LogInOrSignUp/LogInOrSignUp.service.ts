import firestore from '@react-native-firebase/firestore';

export default class LogInOrSignUpService {
  async handleDocumentExists(documentId: string, setModalScreenName: any) {
    const documentRef = firestore().collection('users').doc(documentId);
    const documentSnapshot = await documentRef.get();

    setModalScreenName(
      documentSnapshot.exists ? 'EnterPassword' : 'FinishSigningUp',
    );
  }
}
