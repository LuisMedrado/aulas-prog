import { router } from 'expo-router';
import { Image, Text, TouchableWithoutFeedback } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../assets/colors.json';

export default function LoadingScreen() {
    return (
        <TouchableWithoutFeedback onPress={() => router.replace('/login')}>
            <SafeAreaView style={styles.container}>
                <Image source={require('../../assets/images/interfaceAssets/logo_start_loading.png')} />
                <Text style={styles.textContinuar}>Clique para continuar</Text>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background,
    },
    textContinuar: {
        top: 250,
        fontSize: 16,
        color: colors.text_light,
    },
};
