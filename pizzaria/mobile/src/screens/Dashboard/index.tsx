import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  SafeAreaView,
} from "react-native";
import React from "react";
import colors from "../../colors";

export default function Dashboard() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Novo pedido</Text>
      <TextInput
        keyboardType="numeric"
        placeholderTextColor={colors.white}
        style={styles.input}
        placeholder="Número da mesa"
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Abir mesa</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors["dark-700"],
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 28,
  },

  text: {
    color: colors.white,
    fontSize: 35,
    fontWeight: "bold",
  },
  input: {
    width: "90%",
    backgroundColor: colors["dark-900"],
    paddingHorizontal: 15,
    paddingVertical: 17,
    borderRadius: 5,
    borderColor: colors.white,
    borderWidth: 1,
    fontSize: 22,
    color: colors.white,
  },

  button: {
    width: "90%",
    backgroundColor: colors["green-900"],
    padding: 10,
    fontSize: 20,
    borderRadius: 5,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
  },
});
