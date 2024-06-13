import storage from '@react-native-firebase/storage';
import {ImageOrVideo} from 'react-native-image-crop-picker';
import {signOut} from 'aws-amplify/auth';

export default class ProfileService {
  async handleSignOut(setModalVisible: any) {
    try {
      await signOut().then(() => {
        setModalVisible(true);
      });
    } catch (error) {
      console.error('error signing out: ', error);
    }
  }

  async fetchImage(profileImageRef: string, setImageURI: any) {
    try {
      const url = await storage().ref(profileImageRef).getDownloadURL();
      setImageURI(url);
    } catch (error) {
      console.error('Error fetching image URI: ', error);
      setImageURI(undefined);
    }
  }

  async uploadProfileImage(profileImageRef: string, image: ImageOrVideo) {
    const reference = storage().ref(profileImageRef);
    await reference.putFile(image.path as string);
  }

  removeImage(profileImageRef: string) {
    void storage().ref(profileImageRef).delete();
  }
}
