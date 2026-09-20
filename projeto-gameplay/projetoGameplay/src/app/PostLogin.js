import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../assets/colors.json';

export default function PostLogin() {
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.containerView}>
                <Image style={styles.image} source={require('../../assets/images/interfaceAssets/profile.jpg')} />
                <View style={{flexDirection: 'column'}}>
                    <Text style={styles.textUp}><Text style={{fontFamily: 'Rajdhani_400Regular', fontSize: 20}}>Olá, </Text>GOAT</Text>
                    <Text style={styles.textDown}>Hoje é dia de vitória</Text>
                </View>
                <View style={styles.quadrado}>
                    <Text style={{color: colors.text, fontSize: 24}}>+</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: colors.background_emphasis,
        // alignItems: 'center',
    },
    containerView: {
        flexDirection: 'row',
        width: '100%',
        height: 100,
        // backgroundColor: 'tomato', // botei a cor so pra ver a area do container
    },
    image: {
        width: 70,
        height: 70,
        resizeMode: 'cover',
        marginTop: 15,
        marginLeft: 25,
        borderRadius: 15,
    },
    textUp: {
        fontSize: 26,
        color: colors.text,
        fontFamily: 'Rajdhani_700Bold',
        marginTop: 15,
        marginLeft: 20,
    },
    textDown: {
        fontSize: 13,
        color: colors.text_light,
        fontFamily: 'Inter_400Regular',
        marginTop: 5,
        marginLeft: 20,
    },
    quadrado: {
        width: 50,
        height: 50,
        backgroundColor: colors.highlight_props,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: colors.highlight_props_border,
        // marginTop: 10,
        marginLeft: 75,
    }
}