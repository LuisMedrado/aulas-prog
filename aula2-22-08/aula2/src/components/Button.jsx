import { TouchableOpacity, Text, StyleSheet, Alert } from 'react-native'




  function handleSave() {
    Alert.alert('sim');
    Haptics.selectionAsync(); // Gera uma vibração leve de seleção
  }
  
export default function ButtonAtt() {
    return (
        <TouchableOpacity style={styles.btn} onPress={handleSave}>
            <Text style={styles.lbl}>Atualizar</Text>
        </TouchableOpacity>
    )
  }

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#00B37E',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  lbl: {
    color: '#fff',
    fontWeight: 'bold',
  }
})