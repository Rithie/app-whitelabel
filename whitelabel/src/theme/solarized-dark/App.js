import { StyleSheet } from 'react-native';
import { colors } from '../../styles';
export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: colors.primary,
    },
    title: {
        paddingHorizontal: 16,
        color: colors.secondary,
        fontSize: 20,
        fontWeight: 'bold',
    },
});
