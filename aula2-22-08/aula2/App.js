import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, 
  TextInput, TouchableWithoutFeedback, Keyboard, ScrollView, 
  KeyboardAvoidingView, Platform, Alert, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Haptics from 'expo-haptics'; 
import ButtonAtt from './src/components/Button';
import { useState } from 'react';

export default function App() {

  const [nome, setNome] = useState('leborn jomes');
  const [emailEditable, setEmailEditable] = useState(false);

  function closeKb() {
    Keyboard.dismiss();
  }

  function handleSave() {
    Alert.alert('sim');
    Haptics.selectionAsync(); // Gera uma vibração leve de seleção
  }

  function clearDefault() {
    Haptics.selectionAsync();
    setNome('');
  }

  function handleEmailPress() {
    Haptics.selectionAsync();
    setEmailEditable(!emailEditable);
    
  }

  return (
    <KeyboardAvoidingView style={styles.kb} behavior={Platform.OS == 'android' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={styles.contContainer}
      bounces={false}>
        <TouchableWithoutFeedback onPress={closeKb}>
          <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />
            <Text style={styles.title}>leborn jomes</Text>
            <View style={styles.main}>
              <TouchableOpacity style={styles.btnAvatar}
                activeOpacity={0.7}> 
                <Image
                  source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-E9ozb47Wqcw-reciIHnVDojd-NZM3ugKYzbmXYQjY-Guc8z7rX3lvy0g&s=10' }}
                  style={styles.imagem}
                  resizeMode="contain"
                />
                <Text style={styles.txtAltfoto}>leborn jomes</Text>
              </TouchableOpacity>

              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="bota teu nome aqui"
                  style={styles.input}
                  value={nome}
                  placeholderTextColor="#7c7c8a"
                />
                <Button onPress={clearDefault} style={styles.btn} title='Limpar'>
                  <Text style={styles.lbl}>Limpar</Text>
                </Button>
                <TextInput
                  defaultValue="le@born.jomes"
                  editable={emailEditable}
                  placeholderTextColor="#7c7c8a"
                  style={[styles.input, styles.inputDis]}
                />
                <TouchableOpacity onPress={handleEmailPress}>
                  <Text style={styles.btn}>Alterar email</Text>
                </TouchableOpacity>
              </View>


              <View style={styles.inputContainer}>
                <Text style={styles.lbl}> Alterar senha </Text>
                <TextInput
                  placeholder="senha antiga"
                  style={styles.input}
                  placeholderTextColor="#7c7c8a"
                  selectionColor='#00B37E'
                  secureTextEntry={true}
                />
                <TextInput
                  placeholder="nova senha"
                  style={styles.input}
                  placeholderTextColor="#7c7c8a"
                  selectionColor='#00B37E'
                  secureTextEntry={true}
                />
              </View>

              {/* <TouchableOpacity style={styles.btn} onPress={handleSave}>
                <Text style={styles.lbl}>Atualizar</Text>
              </TouchableOpacity> */}
              <ButtonAtt/>

            </View>
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
// const valores = {
//   nome: 'leborn jomes',
//   email: 'le@born.jomes',
// }

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: '#fff1cf',
  },
  kb: {
    flex: 1,
  },
  contContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff1cf',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 35,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 40,
    paddingVertical: 24,
    marginTop: 5,
  },
  btnAvatar: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },
  imagem: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  inputDis: {
    backgroundColor: '#f1eaea',
    borderColor: '#ccc',
    editable: false,
  },
  inputContainer: {
    width: '100%',
    alignItems: 'center',
    gap: 16,
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    backgroundColor: '#ffffff',
    borderColor: '#ccc',
    borderRadius: 8,
    width: '80%',
    paddingLeft: 16,
    marginTop: 20,
  },
  txtAltfoto: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#00B37E',
    // paddingTop: 10,
  },
  lbl: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000000',
  },
  btn: {
    backgroundColor: '#00B37E',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 25,
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    width: '60%',
  },
});
