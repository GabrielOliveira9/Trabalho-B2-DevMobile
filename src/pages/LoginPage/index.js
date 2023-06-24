import { TextInput, View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Link } from "@react-navigation/native";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";

export default function LoginPage(){
    
    const { signIn } = useContext(AuthContext);

    return(
        <View style={styles.container}>
            <View style={styles.viewData}>
                <Text style={styles.title}>Realize seu login</Text>
                <TextInput style={styles.input}
                placeholder="Usuário ou E-mail"
                />
                <TextInput style={styles.input}
                placeholder="Senha"
                />
                <TouchableOpacity style={styles.btn} onPress={() => signIn()}>
                    <Text style={styles.text}>Login</Text>
                </TouchableOpacity>
                <Link to={{screen: "RegisterPage"}}>Ainda não tem uma conta? Registre-se</Link>
                <Link to={{screen: "ForgotPasswordPage"}}>Esqueceu sua senha?</Link>
            </View>
        </View>
    );
}