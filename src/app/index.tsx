import { Link, router } from "expo-router"
import { Text, TextInput, TouchableOpacity, View } from "react-native"

export default function LoginScreen(){
    function handleLogin() {
        router.replace("/home/page")
    }
    return(
        <View>
            <View>
                <Text>E-mail</Text>
                <TextInput placeholder="Seu email"/>
            </View>
            <View>
                <Text>Senha</Text>
                <TextInput placeholder="Sua senha"/>
            </View>
            <TouchableOpacity onPress={handleLogin}>
                <Text>Enviar</Text>
            </TouchableOpacity>
            <Link href={"/cadastrar/page"}>Crie uma conta</Link>
        </View>
    )
}