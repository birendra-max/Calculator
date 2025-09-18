import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../screen/Home';
import About from '../screen/About';
import Contact from '../screen/Contact';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: {
                        backgroundColor: "#111827", // Dark gray/black
                        borderTopLeftRadius: 20,    // Rounded top corners
                        borderTopRightRadius: 20,
                        height: 70,                 // Taller tab bar
                        position: "absolute",       // Floating effect
                        paddingBottom: 10,
                        paddingTop: 10,
                    }
                }}
            >
                <Tab.Screen name='Home' component={Home} options={{ tabBarIcon: ({ color, size }) => <Ionicons name='home' color={color} size={size} /> }} />
                <Tab.Screen name='About' component={About} options={{ tabBarIcon: ({ color, size }) => <Ionicons name='information-circle' color={color} size={size} /> }} />
                <Tab.Screen name='Contact' component={Contact} options={{ tabBarIcon: ({ color, size }) => <Ionicons name='call' color={color} size={size} /> }} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}