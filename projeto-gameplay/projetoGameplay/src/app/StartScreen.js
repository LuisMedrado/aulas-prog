import { Image, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../assets/colors.json';

export default function LoadingScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.image} source={require('../../assets/images/interfaceAssets/leesin_bg.png')} />
            <Text style={styles.textPrincipal}>Conecte-se{"\n"}e organize suas{"\n"}jogatinas</Text>
        </SafeAreaView>
    );
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: colors.background_emphasis,
    },
    image: {
        width: '100%',
        // height: '100%',
        resizeMode: 'cover',
        top: 50,
    },
    textPrincipal: {
        textAlign: 'center',
        fontSize: 24,
        color: colors.text,
        fontFamily: 'Rajdhani_700Bold'
        // fontWeight: 'bold',
    },
}