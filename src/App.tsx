import { registerRootComponent } from "expo";
import Tabs from "./component/Tabs/Tabs";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}

registerRootComponent(App);

