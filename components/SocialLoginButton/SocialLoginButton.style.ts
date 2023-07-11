import {StyleSheet} from 'react-native';

const socialLoginButtonStyles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: 'black',
  },
  iconContainer: {
    marginRight: 8,
  },
  buttonText: {
    color: 'black',
    fontFamily: 'Poppins-SemiBold',
  },
  logo: {
    flex: 1,
    aspectRatio: 0.9,
    resizeMode: 'contain',
  },
  facebookLogo: {
    height: 25,
    width: 25,
  },
});

export default socialLoginButtonStyles;
