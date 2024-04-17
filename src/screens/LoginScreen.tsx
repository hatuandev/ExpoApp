import React, { useState } from "react";
import { View, TextInput, Button, Alert, Image } from "react-native";

export default function LoginScreen() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  return (
    <View style={{ padding: 10 }}>
      <Image
        style={{ width: 200, height: 60 }}
        source={{ uri: "./assets/icon.png" }}
      />
      <TextInput
        placeholder="Username"
        onChangeText={(username) => setUsername(username)}
        defaultValue={username}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
        defaultValue={password}
      />
      <Button
        title="Login"
        onPress={() => Alert.alert("Credentials", `${username} + ${password}`)}
      />
    </View>
  );
}
