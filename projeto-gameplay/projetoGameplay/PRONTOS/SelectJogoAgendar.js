import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../assets/colors.json';
import CardPartida from '../components/CardPartidaMini';

export default function SelectJogoAgendar() {
    return(
        <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
            {/* esse edges com esses argumentos serve dar transparencia pro indicador de gestos da parte inferior da tela */}

            <ScrollView style={styles.scrollView} contentContainerStyle={{ paddingBottom: 40 }}> 
                {/* aqui deu bom o espaçamento no ultimo card, com esse contentcontainerstyle */}
                <View style={{flexDirection: 'row', 
                    marginBottom: 15,
                    // backgroundColor: 'blue', // so pra visualizar a area
                    width: '100%',
                    height: 50}}>
                    <Text style={styles.textoSecundario}>__________</Text>
                </View>
                <View style={styles.colunaPartidas}>
                    {/* pt1 */}
                    <CardPartida
                    imagem={require('../../assets/images/interfaceAssets/league_icon.png')}
                    titulo={"mu? qui? nha?"}
                    funcao={"chefe"}
                    
                    ></CardPartida>

                    {/* pt2 */}
                    <CardPartida
                    imagem={require('../../assets/images/interfaceAssets/rdr2_icon.png')}
                    titulo={"tosse esquisita"}
                    funcao={"aviaozinho"}
                    
                    ></CardPartida>

                    {/* pt3 */}
                    <CardPartida
                    imagem={require('../../assets/images/interfaceAssets/csgo_icon.png')}
                    titulo={"presente professor"}
                    funcao={"chefe"}
                    
                    ></CardPartida>

                    {/* pt4 */}
                    <CardPartida
                    imagem={require('../../assets/images/interfaceAssets/apex_icon.png')}
                    titulo={"jogo morto"}
                    funcao={"chefe"}
                    
                    ></CardPartida>

                    {/* pt5 */}
                    <CardPartida
                    imagem={require('../../assets/images/interfaceAssets/valorant_icon.png')}
                    titulo={"tiro com magia"}
                    funcao={"chefe"}
                    
                    ></CardPartida>

                    {/* pt6 */}
                    <CardPartida
                    imagem={require('../../assets/images/interfaceAssets/mine_icon.png')}
                    titulo={"minezao damassa"}
                    funcao={"aviaozinho"}
                    // style={{marginBottom: 15}} tentativa falha de não deixar a parte inferior do ultimo card cortado pela parte inferior da tela
                    ></CardPartida>

                    {/* pt7 */}
                    <CardPartida
                    imagem={require('../../assets/images/interfaceAssets/dota2_icon.jpg')}
                    titulo={"habitat do seu creysson"}
                    funcao={"aviaozinho"}
                    
                    ></CardPartida>

                    {/* pt8 */}
                    <CardPartida
                    imagem={require('../../assets/images/interfaceAssets/cf_icon.webp')}
                    titulo={"sdds stroiter"}
                    funcao={"chefe"}
                    
                    ></CardPartida>

                    {/* pt9 */}
                    <CardPartida
                    imagem={require('../../assets/images/interfaceAssets/repo_icon.avif')}
                    titulo={"velho da 12"}
                    funcao={"chefe"}
                    
                    ></CardPartida>

                    {/* pt10 */}
                    <CardPartida
                    imagem={require('../../assets/images/interfaceAssets/peak_icon.jpg')}
                    titulo={"comi uma planta roxa e morri"}
                    funcao={"aviaozinho"}
                    
                    ></CardPartida>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: colors.background_emphasis,
        // opacity
        // alignItems: 'center',
    },
    containerView: {
        flexDirection: 'row',
        width: '100%',
        height: 100,
        // backgroundColor: 'tomato', // botei a cor so pra ver a area do container
    },
    containerViewGap: {
        gap: 15,
        marginLeft: 12,
        marginTop: 30,
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
        flex: 1,
        marginTop: 50, 
        borderRadius: 30,
        borderWidth: 2,
        borderColor: colors.background_light,
        width: '100%',
        backgroundColor: colors.background
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
        color: colors.background_light,  
        fontFamily: 'Inter_700Bold',
        margin: 'auto',
        marginTop: 0
    },
    colunaPartidas: {
        width: '95%',
        margin: 'auto',
        // height: 500,
        // backgroundColor: 'green',
    },
    // partida: {
    // movi isso aqui pro CardPartida.jsx
    // },
}