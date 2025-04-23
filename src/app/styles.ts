import { StyleSheet } from "react-native";
import { blue } from "react-native-reanimated/lib/typescript/Colors";
 
export const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    backgroundColor: "#f0f4f8",
    padding: 20,
    justifyContent: "center",
   
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#1e1e1e",
    marginBottom: 40,
    alignSelf: "center",
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 6,
    fontSize: 16,
    color: "#333",
  },
  input: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    width: 380
  },
  button: {
    backgroundColor: "#3b82f6",
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 3,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  link: {
    marginTop: 20,
    alignSelf: "center",
    color: "#3b82f6",
    fontSize: 16,
  },
  loginButton: {
    backgroundColor:"#3b82f6",
    padding: 10,
    width: 380,
    borderRadius: 10,
    marginTop:10,
    marginBottom: 30

  },



});