import {StyleSheet} from 'react-native';
import {colors} from '~/styles';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    padding: 5,
    marginVertical: 10,
  },
  paragraph: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.white,
  },
  label: {
    fontSize: 10,
    textAlign: 'center',
    color: colors.white,
  },
  viewPlaceholder: {
    height: 4,
    width: '100%',
  },
});

export default styles;
