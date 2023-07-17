import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import colors from "../../colors";

export default function SignIn() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../../assets/logo.png")} />

      <View style={styles.containerInput}>
        <TextInput
          placeholder="Digite seu email"
          placeholderTextColor={colors.white}
          style={styles.input}
        ></TextInput>

        <TextInput
          placeholder="Sua senha"
          placeholderTextColor={colors.white}
          style={styles.input}
        ></TextInput>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors["dark-700"],
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: "80%",
  },
  containerInput: {
    alignItems: "center",
    justifyContent: "center",
    width: "95%",
    marginTop: 50,
    gap: 10,
  },
  input: {
    width: "95%",
    backgroundColor: colors["dark-900"],
    padding: 8,
    borderRadius: 5,
    color: colors.white,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  button: {
    backgroundColor: colors["green-900"],
    width: "95%",
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginTop: 15,
  },
  buttonText: {
    fontSize: 20,
  },
});
