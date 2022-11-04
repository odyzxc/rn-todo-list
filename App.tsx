import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import TodoScreen from "./features/todo-list/TodoScreen";
import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <TodoScreen />
        {/*<StatusBar style="auto" />*/}
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    //justifyContent: "center",
    margin: "20%",
  },
});
