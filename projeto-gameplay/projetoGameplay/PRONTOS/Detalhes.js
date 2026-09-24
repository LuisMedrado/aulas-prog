import { FontAwesome, FontAwesome5 } from '@expo/vector-icons/';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../assets/colors.json';
import CardPlayer from '../components/CardPlayer.jsx';

export default function Detalhes() {
    return(
        <SafeAreaView style={styles.container} edges={[ 'left', 'right']}>
            {/* esse edges com esses argumentos serve dar transparencia pro indicador de gestos da parte inferior da tela */}
            <View style={[styles.containerView, {backgroundColor: colors.background_light}]}>
                            {/* <Text style={styles.textUp}></Text> */}
                <FontAwesome5 name="arrow-left" size={20} color={colors.text}
                            style={{marginTop: 55, marginLeft: 30}}/>
                <View style={{flexDirection: 'column'}}>
                    <Text style={styles.textUp}>Detalhes</Text>
                </View>

                <FontAwesome name='share-alt' size={25} color={colors.highlight_props}
                style={{
                    marginTop: 55,
                    marginLeft: 100,
                    marginRight: 'auto'
                }}/>

            </View>

            <View style={styles.viewImagem}>
                <Image style={styles.imageDisplay} source={require('../../assets/images/interfaceAssets/wr_bg.png')}/>
                
                <LinearGradient colors={['transparent', colors.background_image]} style={styles.textImagem}>
                    <Text style={styles.textUpImagem}>
                        mu? qui? nha?
                    </Text>
                    <Text style={styles.textDownImagem}>
                        lolzada de cria até pegar challenger{"\n"}
                        adeus bronzes e pratas olá brtt faker e yoda 
                    </Text>
                </LinearGradient>
                
            </View>

            <ScrollView style={styles.scrollView} contentContainerStyle={{ paddingBottom: 40 }}> 
                <View style={{flexDirection: 'row', 
                    marginBottom: 15,
                    // backgroundColor: 'blue', 
                    height: 50}}>
                    <Text style={styles.textoPrincipal}>Jogadores</Text>
                    <Text style={styles.textoSecundario}>Total: 3</Text>
                </View>
                <View style={styles.colunaPartidas}>
                    {/* pt1 */}
                    <CardPlayer
                    imagem={require('../../assets/images/interfaceAssets/professor.webp')}
                    titulo={"professor"}
                    funcao={"ta on (por enquanto)"}
                    cor={colors.light_indicator}
                    ></CardPlayer>

                    {/* pt2 */}
                    <CardPlayer
                    imagem={require('../../assets/images/interfaceAssets/formigao.jpg')}
                    titulo={"formigao"}
                    funcao={"ta off"}
                    cor={colors.highlight_props}
                    ></CardPlayer>

                    {/* pt3 */}
                    <CardPlayer
                    imagem={require('../../assets/images/interfaceAssets/walter_white.webp')}
                    titulo={"berg"}
                    funcao={"ta off"}
                    cor={colors.highlight_props}
                    ></CardPlayer>

                </View>
            </ScrollView>
            <TouchableOpacity style={styles.buttonLogin}>
                <Image style={styles.buttonImage} source={require('../../assets/images/interfaceAssets/discord_icon3x.png')} />
                <Text style={styles.textButton}>Entrar com Discord</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = {
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
        // marginTop: 80,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 20,
        flexDirection: 'row',
    },
    buttonImage: {
        width: 36,
        height: 24,
        marginTop: 'auto',
        marginBottom: 'auto',
        marginLeft: 20,
    },
    textButton: {
        fontSize: 16,
        color: colors.text,
        fontFamily: 'Inter_400Regular',
        marginTop: 23,
        marginLeft: '15%',
    },
    container: {
        flex: 1,
        backgroundColor: colors.background_emphasis,
        // alignItems: 'center',
    },
    containerView: {
        flexDirection: 'row',
        width: '100%',
        height: 110,
        // backgroundColor: 'tomato', // botei a cor so pra ver a area do container
    },
    containerViewGap: {
        gap: 15,
        marginLeft: 12,
        marginTop: 30,
    },
    viewImagem: {
        // flex: 1
        width: '100%',
        height: 250,
        // backgroundColor: 'tomato'
    },
    textImagem: {
        width: '100%',
        height: 100,
        marginTop: -100,
        paddingLeft: 20,
        marginRight: 'auto',
        // backgroundColor: 'tomato'
    },
    image: {
        width: 70,
        height: 70,
        resizeMode: 'cover',
        marginTop: 15,
        marginLeft: 25,
        borderRadius: 15,
    },
    imageDisplay: {
        width: '100%',
        height: 250,
        opacity: 0.65,
        backgroundColor: colors.background_image
    },
    textUp: {
        fontSize: 23,
        color: colors.text,
        fontFamily: 'Rajdhani_700Bold',
        marginTop: 50,
        marginLeft: 103,
    },
    textUpImagem: {
        fontSize: 30,
        color: colors.text,
        fontFamily: 'Rajdhani_700Bold',
        // marginTop: -100
    },
    textDown: {
        fontSize: 13,
        color: colors.text_light,
        fontFamily: 'Inter_400Regular',
        marginTop: 5,
        marginLeft: 20,
    },
    textDownImagem: {
        fontSize: 15,
        color: colors.text_light,
        fontFamily: 'Inter_400Regular',
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
        marginRight: 15,
        marginLeft: 'auto',
    },
    modal: {
        width: 110,
        height: 130,
        backgroundColor: colors.background_light,
        borderRadius: 10,
        borderWidth: 2.5,
        borderColor: colors.props_border,
        // justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column', // so pra garantir
    },
    modalImage: {
        marginTop: 20,
    },
    modalText: {
        fontSize: 16,
        color: colors.text,
        fontFamily: 'Rajdhani_700Bold',
        marginTop: 15,
    },
    scrollView: {
        marginTop: 20, 
        marginLeft: '2.5%', 
        width: '95%', 
        // height: 10, 
        // justifyContent: 'center', 
        // backgroundColor: 'tomato'
    },
    textoPrincipal: {
        fontSize: 20,
        color: colors.text,
        fontFamily: 'Rajdhani_700Bold',
        marginTop: 10,
        marginLeft: 10,
    },
    textoSecundario: {
        fontSize: 16,
        color: colors.text_light,  
        fontFamily: 'Inter_400Regular',
        marginTop: 12,
        marginLeft: 'auto',
    },
    colunaPartidas: {
        width: '100%',
        // height: 500,
        // backgroundColor: 'green',
    },
    // partida: {
    // movi isso aqui pro CardPartida.jsx
    // },
}