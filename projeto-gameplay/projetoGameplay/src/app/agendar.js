import { Entypo, FontAwesome5 } from '@expo/vector-icons/';
import * as Haptics from 'expo-haptics';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { useState } from 'react';
import { Image, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../assets/colors.json';
import { CATEGORIAS, useAppData } from '../context/AppDataContext';

export default function Agendar() {

    const { addMatch, selectedServer } = useAppData();

    const [modalSelect, setModalSelect] = useState(null)
    const [dia, setDia] = useState('');
    const [mes, setMes] = useState('');
    const [hora, setHora] = useState('');
    const [minuto, setMinuto] = useState('');
    const [descricao, setDescricao] = useState('');

    function handlePressModal(nomeModal) {
        if (modalSelect == nomeModal) {
            setModalSelect(null);
        } else {
            setModalSelect(nomeModal);
        }
        Haptics.selectionAsync();
    }

    const formularioValido = modalSelect != null && selectedServer != null && dia.length > 0 && mes.length > 0 && hora.length > 0 && minuto.length > 0;

    function handleAgendar() {
        if (!formularioValido) {
            return;
        }

        Haptics.selectionAsync();

        addMatch({
            id: String(Date.now()),
            imagem: selectedServer.imagem,
            titulo: selectedServer.titulo,
            categoria: CATEGORIAS[modalSelect],
            data: `${dia.padStart(2, '0')}/${mes.padStart(2, '0')} às ${hora.padStart(2, '0')}:${minuto.padStart(2, '0')}h`,
            funcao: 'chefe',
            isAnfitriao: true,
            descricao: descricao,
        });

        router.replace('/home');
    }

    return(
        <SafeAreaView style={styles.container} edges={['left', 'right']}>
            {/* esse edges com esses argumentos serve dar transparencia pro indicador de gestos da parte inferior da tela */}

            <LinearGradient colors={[colors.background, colors.background_emphasis]} style={{flex: 1}}>
                {/* e dale no degrade, deu trabalho mas funfou */}
                <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
                    <ScrollView
                        style={{flex: 1}}
                        contentContainerStyle={{ flexGrow: 1, paddingBottom: 40 }} // nao sei se esse padding eh o ideal, mas foi o que fez o campo de texto parar de ser cortado pelo teclado
                        keyboardShouldPersistTaps="handled"
                        bounces={false}
                    >
                        <View style={[styles.containerView, {backgroundColor: colors.background_light}]}>
                            {/* <Text style={styles.textUp}></Text> */}
                            <TouchableOpacity onPress={() => router.back()}>
                                <FontAwesome5 name="arrow-left" size={30} color={colors.text}
                                style={{marginTop: 45, marginLeft: 30}}/>
                            </TouchableOpacity>
                            <View style={{flexDirection: 'column'}}>
                                <Text style={styles.textUp}>Agendar partida</Text>
                            </View>

                        </View>

                        <Text style={styles.textCategoria}>Categoria</Text>

                        <View style={[styles.containerView, styles.containerViewGap]}>

                            {/* ranked */}
                            <TouchableOpacity style={[styles.modal, {opacity: modalSelect == 'ranked' ? 1 : 0.5}]} onPress={() => handlePressModal('ranked')}>
                                <Image style={styles.modalImage} source={require('../../assets/images/interfaceAssets/icon_ranking.png')} />
                                <Text style={styles.modalText}>Ranked</Text>
                            </TouchableOpacity>

                            {/* clash */}
                            <TouchableOpacity style={[styles.modal, {opacity: modalSelect == 'clash' ? 1 : 0.5}]} onPress={() => handlePressModal('clash')}>
                                <Image style={styles.modalImage} source={require('../../assets/images/interfaceAssets/icon_clash.png')} />
                                <Text style={styles.modalText}>Clash</Text>
                            </TouchableOpacity>

                            {/* 4fun */}
                            <TouchableOpacity style={[styles.modal, {opacity: modalSelect == '4fun' ? 1 : 0.5}]} onPress={() => handlePressModal('4fun')}>
                                <Image style={styles.modalImage} source={require('../../assets/images/interfaceAssets/icon_smilingFace.png')} />
                                <Text style={styles.modalText}>4fun</Text>
                            </TouchableOpacity>

                        </View>

                        <TouchableOpacity style={styles.selectServer} onPress={() => router.push('/selecionar-servidor')}>
                            {selectedServer ? (
                                <Image source={selectedServer.imagem} style={styles.quadrado} />
                            ) : (
                                <View style={styles.quadrado}></View>
                            )}
                            <Text style={styles.textServidor}>{selectedServer ? selectedServer.titulo : 'Selecione um servidor'}</Text>
                            <Entypo name='chevron-right' size={15} color={colors.text_light} style={{marginTop: 'auto', marginBottom: 'auto', marginRight: 'auto'}}/>
                        </TouchableOpacity>

                        <View style={styles.containerRow}>

                            <Text style={[styles.textTime, {marginLeft: 0}]}>
                                Dia e mês
                            </Text>

                            <Text style={[styles.textTime,{marginRight: 0}]}>
                                Hora e minuto
                            </Text>

                        </View>

                        <View style={styles.containerRow}>

                            <View style={[styles.containerRow, {width: '50%', marginTop: 0}]}>

                                {/* dia e mes */}
                                <TextInput
                                    style={[styles.quadrado, styles.quadradoSeletor, styles.quadradoInputTexto]}
                                    keyboardType="number-pad"
                                    maxLength={2}
                                    placeholder="DD"
                                    placeholderTextColor={colors.text_light}
                                    value={dia}
                                    onChangeText={setDia}
                                />
                                <Text style={{color: colors.text_light, fontSize: 15, marginTop: 'auto', marginBottom: 'auto', marginLeft: 3, marginRight: 3}}>/</Text>
                                <TextInput
                                    style={[styles.quadrado, styles.quadradoSeletor, styles.quadradoInputTexto]}
                                    keyboardType="number-pad"
                                    maxLength={2}
                                    placeholder="MM"
                                    placeholderTextColor={colors.text_light}
                                    value={mes}
                                    onChangeText={setMes}
                                />

                            </View>

                            <View style={[styles.containerRow, {width: '50%', marginTop: 0}]}>

                                {/* hora e minutoi */}
                                <TextInput
                                    style={[styles.quadrado, styles.quadradoSeletor, styles.quadradoInputTexto, {marginLeft: 'auto'}]}
                                    keyboardType="number-pad"
                                    maxLength={2}
                                    placeholder="HH"
                                    placeholderTextColor={colors.text_light}
                                    value={hora}
                                    onChangeText={setHora}
                                />
                                <Text style={{color: colors.text_light, fontSize: 15, marginTop: 'auto', marginBottom: 'auto', marginLeft: 3, marginRight: 3}}>:</Text>
                                <TextInput
                                    style={[styles.quadrado, styles.quadradoSeletor, styles.quadradoInputTexto]}
                                    keyboardType="number-pad"
                                    maxLength={2}
                                    placeholder="MM"
                                    placeholderTextColor={colors.text_light}
                                    value={minuto}
                                    onChangeText={setMinuto}
                                />

                            </View>

                        </View>

                        <View style={styles.containerRow}>
                            <Text style={[styles.textTime, {marginLeft: 0}]}>Descrição</Text>
                            <Text style={styles.textDown}>{descricao.length}/100 caracteres</Text>
                        </View>

                        <TextInput
                            style={[styles.quadrado, styles.quadradoTextInput]}
                            multiline={true}
                            selectionColor={colors.text}
                            maxLength={100}
                            value={descricao}
                            onChangeText={setDescricao}
                        >
                        </TextInput>

                        <TouchableOpacity
                            style={[styles.quadrado, styles.quadradoBtn, {opacity: formularioValido ? 1 : 0.5}]}
                            onPress={handleAgendar}
                            disabled={!formularioValido}
                        >
                            <Text style={{color: colors.text, fontFamily: 'Inter_700Bold', margin: 'auto', fontSize: 16}}>
                                Agendar
                            </Text>
                        </TouchableOpacity>
                    </ScrollView>
                </KeyboardAvoidingView>
            </LinearGradient>

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
        marginTop: 20,
    },
    containerRow: {
        flexDirection: 'row',
        width: '90%',
        // height: 40,
        // backgroundColor: 'tomato',
        marginTop: 20,
        marginLeft: 'auto',
        marginRight: 'auto'
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
        marginTop: 45,
        marginLeft: 50,
    },
    textTime: {
        fontSize: 18,
        color: colors.text,
        fontFamily: 'Rajdhani_700Bold',
        margin: 'auto'
    },
    textServidor: {
        fontFamily: 'Rajdhani_700Bold',
        color: colors.text,
        marginLeft: 'auto',
        marginRight: 'auto',
        alignSelf: 'center',
        fontSize: 18,
    },
    textDown: {
        fontSize: 13,
        color: colors.text_light,
        fontFamily: 'Inter_400Regular',
        marginTop: 5,
        marginLeft: 20,
    },
    textCategoria: {
        fontFamily: 'Rajdhani_700Bold',
        color: colors.text,
        marginTop: 20,
        marginLeft: 15,
        fontSize: 20
    },
    quadrado: {
        width: 80,
        height: 80,
        backgroundColor: colors.background_light,
        borderRightWidth: 1,
        borderRadius: 8,
        borderColor: colors.props_border,
    },
    quadradoSeletor: {
        width: 50,
        height: 50
    },
    quadradoInputTexto: {
        color: colors.text,
        fontFamily: 'Inter_400Regular',
        fontSize: 16,
        textAlign: 'center',
    },
    quadradoTextInput: {
        width: '90%',
        height: '12%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '5%',
        color: colors.text_light,
        fontFamily: 'Inter_400Regular',
        textAlignVertical: 'top',
        paddingTop: 15,
        paddingLeft: 20,
        // selectionColor: 'tomato' // isso aq é uma prop
    },
    quadradoBtn: {
        width: '90%',
        height: 65,
        // marginLeft: 'auto',
        // marginRight: 'auto',
        // marginTop: 'auto'
        margin: 'auto',
        marginTop: 40,
        backgroundColor: colors.highlight_props,
        borderColor: colors.highlight_props_border,
        borderWidth: 1,
        borderRadius: 15,
        // paddingBottom: 10
    },
    modal: {
        width: 110,
        height: 130,
        backgroundColor: colors.background_light,
        // opacity: 0.5, // isso aqui deu ruim, foi a tentativa de deixar a opacidade alternavel por useState cru
        // tive que usar funçao pra fazer a logica de alternar
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
    selectServer: {
        flexDirection: 'row',
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 70,
        // backgroundColor: 'tomato',
        borderRadius: 10,
        borderColor: colors.props_border,
        borderWidth: 1,
    }
}
