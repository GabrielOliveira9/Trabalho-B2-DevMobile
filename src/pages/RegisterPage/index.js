import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { TextInput } from "react-native";
import { View } from "react-native";
import styles from "./styles";
import { Link } from "@react-navigation/native";

export default function RegisterPage(){
    return(
        <View style={styles.container}>
            <View style={styles.viewData}>
                <Text style={styles.title}>Faça seu cadastro</Text>
                <TextInput style={styles.input}
                placeholder="E-mail"
                />
                <TextInput style={styles.input}
                placeholder="Nome de Usuário"
                />
                <TextInput style={styles.input}
                placeholder="Senha"
                />
                 <Link to={{screen: "LoginPage"}}>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.text}>Confirmar Registro</Text>
                    </TouchableOpacity>
                </Link>
            </View>
        </View>
    );
}