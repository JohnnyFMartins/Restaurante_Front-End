import { Link, router } from "expo-router";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
 
export default function CadastrarScreen() {
   function handleLogin() {
      router.replace("/home/page")
    }
   return(
   
 
     <View style={styles.container}>
       <Text style={styles.title}>Novo Cadastro </Text>
                <View>
                    <Text>Nome</Text>
                    <TextInput placeholder="Seu nome" style={styles.input}/>
                </View>
                <View>
                 <Text>E-mail</Text>
                 <TextInput placeholder="Seu e-mail"style={styles.input}/>
            </View>
            <View>
                    <Text>CPF</Text>
                    <TextInput placeholder="Seu CPF" style={styles.input}/>
                </View>
                <View>
                    <Text>Nascimento</Text>
                    <TextInput placeholder="Data de nascimento" style={styles.input}/>
                </View>
                <View>
                    <Text>Senha</Text>
                    <TextInput placeholder="Sua senha" style={styles.input}/>
                </View>
            <TouchableOpacity onPress={handleLogin}style={styles.loginButton}>
                <Text>Enviar</Text>
            </TouchableOpacity>
            
          </View>      
 
 
 
 
   )
}