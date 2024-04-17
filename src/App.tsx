import { registerRootComponent } from "expo";
import Tabs from "./component/Tabs/Tabs";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./screens/LoginScreen";

export default function App() {

  return (
    <LoginScreen></LoginScreen>
    // <NavigationContainer>
    //   <Tabs />
    // </NavigationContainer>
  );
}

registerRootComponent(App);
