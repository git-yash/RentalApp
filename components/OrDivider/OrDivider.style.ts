import {StyleSheet} from 'react-native';
import Colors from '../../assets/Colors';

const orDividerStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.gray400,
    margin: 15,
  },
  text: {
    marginHorizontal: 10,
    fontFamily: 'Poppins-SemiBold',
    color: Colors.gray500,
  },
});

export default orDividerStyles;
