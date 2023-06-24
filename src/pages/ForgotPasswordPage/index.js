import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { TextInput } from "react-native";
import { View } from "react-native";
import styles from "./styles";
import { Link } from "@react-navigation/native";


export default function ForgotPasswordPage(){
    return(
        <View style={styles.container}>
            <View style={styles.viewData}>
                <Text style={styles.title}>Redefina sua senha</Text>
                <TextInput style={styles.input}
                placeholder="Usuário ou E-mail"
                />
                 <Link to={{screen: "LoginPage"}}>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.text}>Alterar Senha</Text>
                    </TouchableOpacity>
                </Link>
            </View>
        </View>
    );
}