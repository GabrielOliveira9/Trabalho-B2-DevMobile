import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MoviesPage from '../pages/MoviesPage';

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='MoviesPage' component={MoviesPage} /> 
        </Stack.Navigator>
    )
}