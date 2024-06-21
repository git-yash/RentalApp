import {signOut} from 'aws-amplify/auth';
import {getUrl, remove, uploadData} from 'aws-amplify/storage';
import {ImageOrVideo} from 'react-native-image-crop-picker';

export default class ProfileService {
  async handleSignOut() {
    return await signOut();
  }

  async fetchImage(path: string) {
    return await getUrl({
      path: path,
      options: {
        validateObjectExistence: true,
      },
    });
  }

  async uploadProfileImage(path: string, image: ImageOrVideo) {
    const response = await fetch(image.path);
    const imageData = await response.blob();
    return uploadData({
      path: path,
      data: imageData,
      options: {
        contentEncoding: 'compress',
        contentType: 'image/jpeg',
      },
    }).result;
  }

  removeImage(path: string) {
    return remove({
      path: path,
    });
  }
}
