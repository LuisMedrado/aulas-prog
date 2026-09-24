import { MaterialIcons } from '@expo/vector-icons';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../assets/colors.json';

export default function CardPartida({
  imagem,
  titulo,
  categoria,
  data,
  funcao,
  isAnfitriao,
  onPress,
}) {
  const corFuncao = isAnfitriao ? colors.highlight_props : colors.light_indicator ;

  return (
    <TouchableOpacity style={styles.partida} activeOpacity={0.7} onPress={onPress}>
      <Image source={imagem} style={styles.imagem} />
      <View style={styles.containerInfo}>
        
        <View style={styles.linhaSuperior}>
          <Text style={styles.titulo}>{titulo}</Text>
          <Text style={styles.categoria}>{categoria}</Text>
        </View>

        <View style={styles.linhaInferior}>
          <View style={styles.infoIcone}>
            <MaterialIcons name="calendar-today" size={16} color={colors.highlight_props} />
            <Text style={styles.data}>{data}</Text>
          </View>

          <View style={styles.infoIcone}>
            <MaterialIcons name="person" size={18} color={corFuncao} />
            <Text style={[styles.funcao, { color: corFuncao }]}>{funcao}</Text>
          </View>
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
  categoria: {
    color: colors.text_light,
    fontSize: 14,
  },
  linhaInferior: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoIcone: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  data: {
    color: colors.text,
    fontSize: 14,
    marginLeft: 6,
  },
  funcao: {
    fontSize: 14,
    marginLeft: 4,
    fontWeight: '500',
  }
});