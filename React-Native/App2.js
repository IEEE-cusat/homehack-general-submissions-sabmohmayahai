import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                title="See Maps"
                color="#242424"
                onPress={() => navigation.navigate('Maps')}
            />
            <Text>{'\n'}</Text>
            <Button
                title="Real-time Values"
                color="#242424"
                onPress={() => navigation.navigate('Sensors')}
            />
        </View>
    );
}

function MapsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Screen</Text>
        </View>
    );
}

function SensorsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Screen</Text>
        </View>
    );
}

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        title: 'Our-Ways!',
                        headerStyle: {
                            backgroundColor: '#242424',
                        },
                        headerTitleAlign: "center",
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: '800',
                        },
                    }}
                />
                <Stack.Screen
                    name="Maps"
                    component={MapsScreen}
                    options={{
                        headerTransparent: true,
                        headerTintColor: 'black',
                        headerTitleStyle: {
                            fontWeight: '800',
                        },
                    }}
                />
                <Stack.Screen
                    name="Sensors"
                    component={SensorsScreen}
                    options={{
                        headerTransparent: true,
                        headerTintColor: 'black',
                        headerTitleStyle: {
                            fontWeight: '800',
                        },
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
