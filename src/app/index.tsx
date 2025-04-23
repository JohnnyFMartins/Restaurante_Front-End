import { Link, router } from "expo-router";
import {  Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
 
 
export default function LoginScreen(){
  function handleLogin() {
    router.replace("/home/page")
  }
 
    return(
        <View>
            <View>
                <Text>E-mail</Text>
                <TextInput placeholder="Seu email" style={styles.input}/>
            </View>
            <View>
             <Text>Senha</Text>
             <TextInput placeholder="Sua senha"style={styles.input}/>
        </View>
        <TouchableOpacity onPress={handleLogin}style={styles.loginButton}>
            <Text>Enviar</Text>
        </TouchableOpacity>
        <Link href={"/cadastrar/page"}>Crie uma conta</Link>
      </View>      
    )
}