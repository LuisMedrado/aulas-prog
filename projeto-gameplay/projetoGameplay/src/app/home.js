import { router } from 'expo-router';
import { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../assets/colors.json';
import CardPartida from '../components/CardPartida';
import { CATEGORIAS, useAppData } from '../context/AppDataContext';

export default function Home() {
    const { user, matches } = useAppData();
    const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);

    function handlePressCategoria(chave) {
        setCategoriaSelecionada((atual) => (atual === chave ? null : chave));
    }

    const partidasFiltradas = categoriaSelecionada
        ? matches.filter((match) => match.categoria === CATEGORIAS[categoriaSelecionada])
        : matches;

    return(
        <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
            {/* esse edges com esses argumentos serve dar transparencia pro indicador de gestos da parte inferior da tela */}
            <View style={styles.containerView}>
                <Image style={styles.image} source={require('../../assets/images/interfaceAssets/top9nacional.jpg')} />
                <View style={{flexDirection: 'column'}}>
                    <Text style={styles.textUp}><Text style={{fontFamily: 'Rajdhani_400Regular', fontSize: 20}}>Olá, </Text>{user?.nome ?? 'visitante'}</Text>
                    <Text style={styles.textDown}>Hoje é dia de vitória</Text>
                </View>
                <TouchableOpacity style={styles.quadrado} onPress={() => router.push('/agendar')}>
                    <Text style={{color: colors.text, fontSize: 24}}>+</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.containerView, styles.containerViewGap]}>
                {/* ranked */}
                <TouchableOpacity style={[styles.modal, {opacity: categoriaSelecionada == null || categoriaSelecionada === 'ranked' ? 1 : 0.5}]} onPress={() => handlePressCategoria('ranked')}>
                    <Image style={styles.modalImage} source={require('../../assets/images/interfaceAssets/icon_ranking.png')} />
                    <Text style={styles.modalText}>Ranked</Text>
                </TouchableOpacity>

                {/* clash */}
                <TouchableOpacity style={[styles.modal, {opacity: categoriaSelecionada == null || categoriaSelecionada === 'clash' ? 1 : 0.5}]} onPress={() => handlePressCategoria('clash')}>
                    <Image style={styles.modalImage} source={require('../../assets/images/interfaceAssets/icon_clash.png')} />
                    <Text style={styles.modalText}>Clash</Text>
                </TouchableOpacity>

                {/* 4fun */}
                <TouchableOpacity style={[styles.modal, {opacity: categoriaSelecionada == null || categoriaSelecionada === '4fun' ? 1 : 0.5}]} onPress={() => handlePressCategoria('4fun')}>
                    <Image style={styles.modalImage} source={require('../../assets/images/interfaceAssets/icon_smilingFace.png')} />
                    <Text style={styles.modalText}>4fun</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.scrollView} contentContainerStyle={{ paddingBottom: 40 }}>
                {/* aqui deu bom o espaçamento no ultimo card, com esse contentcontainerstyle */}
                <View style={{flexDirection: 'row',
                    marginBottom: 15,
                    // backgroundColor: 'blue',
                    height: 50}}>
                    <Text style={styles.textoPrincipal}>Partidas agendadas</Text>
                    <Text style={styles.textoSecundario}>Total: {partidasFiltradas.length}</Text>
                </View>
                <View style={styles.colunaPartidas}>
                    {partidasFiltradas.map((match) => (
                        <CardPartida
                            key={match.id}
                            imagem={match.imagem}
                            titulo={match.titulo}
                            categoria={match.categoria}
                            data={match.data}
                            funcao={match.funcao}
                            isAnfitriao={match.isAnfitriao}
                            onPress={() => router.push({ pathname: '/detalhes', params: { id: match.id } })}
                        ></CardPartida>
                    ))}
                </View>
            </ScrollView>
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
        marginTop: 50,
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
        marginLeft: 120,
    },
    colunaPartidas: {
        width: '100%',
        // altura fixa removida: precisa crescer com a quantidade real de partidas dentro do ScrollView
        // backgroundColor: 'green',
    },
    // partida: {
    // movi isso aqui pro CardPartida.jsx
    // },
}
