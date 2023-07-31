import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';
import {ImageOrVideo} from 'react-native-image-crop-picker';

export default class ProfileService {
  handleSignOut(setModalVisible: any) {
    auth()
      .signOut()
      .then(() => {
        setModalVisible(true);
      });
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
    storage()
      .ref(profileImageRef)
      .delete()
      .then(() => {
        console.log('removed');
      });
  }
}
