import { Entypo, FontAwesome5 } from '@expo/vector-icons/';
import * as Haptics from 'expo-haptics';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { Image, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../assets/colors.json';

export default function Agendar() {

    const [modalSelect, setModalSelect] = useState(null)

    function handlePressModal(nomeModal) {
        if (modalSelect == nomeModal) {
            setModalSelect(null);
        } else {
            setModalSelect(nomeModal);
        }
        Haptics.selectionAsync();
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
                            <FontAwesome5 name="arrow-left" size={30} color={colors.text}
                            style={{marginTop: 45, marginLeft: 30}}/>
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

                        <TouchableOpacity style={styles.selectServer}>
                            <View style={styles.quadrado}></View>
                            <Text style={styles.textServidor}>Selecione um servidor</Text>
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

                        <TouchableOpacity style={styles.containerRow}>

                            <TouchableOpacity style={[styles.containerRow, {width: '50%', marginTop: 0}]}>

                                {/* dia e mes */}
                                <View style={[styles.quadrado, styles.quadradoSeletor,]}></View>
                                <Text style={{color: colors.text_light, fontSize: 15, marginTop: 'auto', marginBottom: 'auto', marginLeft: 3, marginRight: 3}}>/</Text>
                                <View style={[styles.quadrado, styles.quadradoSeletor,]}></View>

                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.containerRow, {width: '50%', marginTop: 0}]}>

                                {/* hora e minutoi */}
                                <View style={[styles.quadrado, styles.quadradoSeletor, {marginLeft: 'auto'}]}></View>
                                <Text style={{color: colors.text_light, fontSize: 15, marginTop: 'auto', marginBottom: 'auto', marginLeft: 3, marginRight: 3}}>:</Text>
                                <View style={[styles.quadrado, styles.quadradoSeletor,]}></View>

                            </TouchableOpacity>

                        </TouchableOpacity>

                        <View style={styles.containerRow}>
                            <Text style={[styles.textTime, {marginLeft: 0}]}>Descrição</Text>
                            <Text style={styles.textDown}>Max 100 caracteres</Text>
                        </View>

                        <TextInput style={[styles.quadrado, styles.quadradoTextInput]} multiline={true} selectionColor={colors.text}>

                        </TextInput>

                        <TouchableOpacity style={[styles.quadrado, styles.quadradoBtn]}>
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
