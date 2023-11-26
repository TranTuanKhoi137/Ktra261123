import Scan from "./screens/Scan";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Cart from "./screens/Cart";
import Payment from "./screens/Payment";
export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="LandingScreen">
    //     <Stack.Screen name="LandingScreen" component={LandingScreen} />
    //     <Stack.Screen name="Login" component={Login} />
    //     <Stack.Screen name="SignUp" component={SignUp} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    // //LandingScreen()
    Scan()
  );
}