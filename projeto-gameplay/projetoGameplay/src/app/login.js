import { router } from 'expo-router';
import { Image, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../assets/colors.json';
import { useAppData } from '../context/AppDataContext';

export default function LoginScreen() {
    const { login } = useAppData();

    function handleEntrarComDiscord() {
        login('top9nacional');
        router.replace('/home');
    }

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.image} source={require('../../assets/images/interfaceAssets/leesin_bg.png')} />
            <Text style={styles.textPrincipal}>Conecte-se{"\n"}e organize suas{"\n"}jogatinas</Text>
            <Text style={styles.textSecundario}>Crie grupos para jogar seus games{"\n"}favoritos com seus amigos</Text>
            <TouchableOpacity style={styles.buttonLogin} onPress={handleEntrarComDiscord}>
                <Image style={styles.buttonImage} source={require('../../assets/images/interfaceAssets/discord_icon3x.png')} />
                <Text style={styles.textButton}>Entrar com Discord</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: colors.background_emphasis,
        alignItems: 'center',
    },
    image: {
        width: '100%',
        // height: '100%',
        resizeMode: 'cover',
        marginTop: 30,
    },
    textPrincipal: {
        textAlign: 'center',
        fontSize: 48,
        color: colors.text,
        fontFamily: 'Rajdhani_700Bold',
        // fontWeight: 'bold',
        lineHeight: 50,
    },
    textSecundario: {
        textAlign: 'center',
        fontSize: 17,
        color: colors.text_light,
        fontFamily: 'Rajdhani_400Regular',
        lineHeight: 32,
        marginTop: 30,
    },
    buttonLogin: {
        // flex: 1,
        width: 300,
        height: 70,
        backgroundColor: colors.highlight_props,
        borderWidth: 1,
        borderColor: colors.highlight_props_border,
        borderRadius: 8,
        // justifyContent: 'center',
        // alignItems: 'center',
        marginTop: 80,
        flexDirection: 'row',
    },
    buttonImage: {
        width: 44,
        height: 32,
        marginTop: 18   ,
        marginLeft: 20,
    },
    textButton: {
        fontSize: 18,
        color: colors.text,
        fontFamily: 'Inter_400Regular',
        marginTop: 20,
        marginLeft: '15%',
    },
}
