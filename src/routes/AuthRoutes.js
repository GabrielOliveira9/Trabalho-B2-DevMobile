import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from '../pages/LoginPage';
import ForgotPasswordPage from '../pages/ForgotPasswordPage';
import RegisterPage from '../pages/RegisterPage';

const Stack = createNativeStackNavigator();

export default function AuthRoutes() {
    return(
        <Stack.Navigator>
            <Stack.Screen name='LoginPage' component={LoginPage} /> 
            <Stack.Screen name='ForgotPasswordPage' component={ForgotPasswordPage} /> 
            <Stack.Screen name='RegisterPage' component={RegisterPage} /> 
        </Stack.Navigator>
    )
}