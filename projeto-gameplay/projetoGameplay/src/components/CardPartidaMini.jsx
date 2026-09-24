import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../assets/colors.json';

export default function CardPartida({
  imagem,
  titulo,
  funcao,
  onPress,
}) {

  return (
    <TouchableOpacity style={styles.partida} activeOpacity={0.7} onPress={onPress}>
      <Image source={imagem} style={styles.imagem} />
      <View style={styles.containerInfo}>
        
        <View style={styles.linhaSuperior}>
          <Text style={styles.titulo}>{titulo}</Text>
        </View>

        <View style={styles.linhaInferior}>
          <View style={styles.infoIcone}>
            <Text style={styles.funcao}>{funcao}</Text>
          </View>

          {/* <View style={styles.infoIcone}>
            <Text style={[styles.funcao, { color: corFuncao }]}>{funcao}</Text>
          </View> */}
        </View>

      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  partida: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  imagem: {
    width: 64,
    height: 64,
    borderRadius: 12,
    marginRight: 16,
  },
  containerInfo: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: colors.background_light,
    paddingBottom: 12,
  },
  linhaSuperior: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  titulo: {
    color: colors.text,
    fontSize: 18,
    fontWeight: 'bold',
  },
  // categoria: {
  //   color: colors.text_light,
  //   fontSize: 14,
  // },
  linhaInferior: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoIcone: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  funcao: {
    color: colors.text_light,
    fontSize: 14,
    marginLeft: 6,
  },
  // funcao: {
  //   fontSize: 14,
  //   marginLeft: 4,
  //   fontWeight: '500',
  // }
});