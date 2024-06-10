import {StyleSheet} from 'react-native';
import Colors from '../../../../assets/Colors';

const continueWithStepIndicatorViewStyle = StyleSheet.create({
  bottomView: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'white',
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: Colors.gray300,
    // shadowColor: Colors.gray500,
    // shadowRadius: 4,
    // shadowOpacity: 0.3,
  },
});

export default continueWithStepIndicatorViewStyle;
